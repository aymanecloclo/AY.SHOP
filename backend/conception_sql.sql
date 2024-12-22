-- Table des catégories de produits
CREATE TABLE Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL UNIQUE,
    -- Nom de la catégorie
    Description TEXT,
    -- Description de la catégorie
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des utilisateurs (mise à jour pour Auth0)
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Auth0ID VARCHAR(255) NOT NULL UNIQUE,
    -- Utilisation de l'ID Auth0 pour l'authentification
    FullName VARCHAR(100),
    -- Nom complet de l'utilisateur
    Email VARCHAR(100) NOT NULL UNIQUE,
    -- Email unique pour l'utilisateur
    Role ENUM('Customer', 'Admin') DEFAULT 'Customer',
    -- Rôle de l'utilisateur
    IsActive BOOLEAN DEFAULT TRUE,
    -- Utilisateur actif ou non
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des produits (mise à jour pour une meilleure gestion des prix)
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(150) NOT NULL,
    -- Nom du produit
    Description TEXT,
    -- Description du produit
    Price DECIMAL(10, 2) NOT NULL,
    -- Prix du produit
    Stock INT NOT NULL CHECK (Stock >= 0),
    -- Stock du produit
    CategoryID INT,
    -- Référence à la catégorie
    ImageURL VARCHAR(255),
    -- URL de l'image du produit
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) ON DELETE
    SET
        NULL
);

-- Table des commandes
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    -- Référence à l'utilisateur
    TotalAmount DECIMAL(10, 2) NOT NULL,
    -- Montant total de la commande
    Status ENUM('Pending', 'Completed', 'Cancelled') DEFAULT 'Pending',
    -- Statut de la commande
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table des détails de commandes
CREATE TABLE OrderDetails (
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    -- Référence à la commande
    ProductID INT,
    -- Référence au produit
    Quantity INT NOT NULL,
    -- Quantité commandée
    Price DECIMAL(10, 2) NOT NULL,
    -- Prix du produit au moment de la commande
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);

-- Table des paiements
CREATE TABLE Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    -- Référence à la commande
    PaymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Amount DECIMAL(10, 2) NOT NULL,
    -- Montant payé
    PaymentMethod ENUM('Credit Card', 'PayPal', 'Bank Transfer') NOT NULL,
    -- Méthode de paiement
    PaymentStatus ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
    -- Statut du paiement
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE
);

-- Procédure : Création de commande avec validation de stock
DELIMITER $ $ CREATE PROCEDURE CreateOrder(
    IN p_UserID INT,
    IN p_ProductIDs JSON,
    IN p_Quantities JSON,
    OUT p_OrderID INT
) BEGIN DECLARE i INT DEFAULT 0;

DECLARE ProductID INT;

DECLARE Quantity INT;

DECLARE Total DECIMAL(10, 2) DEFAULT 0;

DECLARE Stock INT;

-- Créer une nouvelle commande
INSERT INTO
    Orders (UserID, TotalAmount, Status)
VALUES
    (p_UserID, 0, 'Pending');

SET
    p_OrderID = LAST_INSERT_ID();

-- Boucler sur les produits et insérer dans OrderDetails
WHILE i < JSON_LENGTH(p_ProductIDs) DO
SET
    ProductID = JSON_EXTRACT(p_ProductIDs, CONCAT('$[', i, ']'));

SET
    Quantity = JSON_EXTRACT(p_Quantities, CONCAT('$[', i, ']'));

-- Vérifier la disponibilité du stock
SELECT
    Stock INTO Stock
FROM
    Products
WHERE
    ProductID = ProductID;

IF Stock >= Quantity THEN -- Insérer dans OrderDetails
INSERT INTO
    OrderDetails (OrderID, ProductID, Quantity, Price)
SELECT
    p_OrderID,
    ProductID,
    Quantity,
    Price
FROM
    Products
WHERE
    ProductID = ProductID;

-- Calculer le total
SET
    Total = Total + (
        SELECT
            Price
        FROM
            Products
        WHERE
            ProductID = ProductID
    ) * Quantity;

-- Mettre à jour le stock
UPDATE
    Products
SET
    Stock = Stock - Quantity
WHERE
    ProductID = ProductID;

ELSE SIGNAL SQLSTATE '45000'
SET
    MESSAGE_TEXT = 'Insufficient stock for product ' + ProductID;

END IF;

SET
    i = i + 1;

END WHILE;

-- Mettre à jour le total de la commande
UPDATE
    Orders
SET
    TotalAmount = Total
WHERE
    OrderID = p_OrderID;

END $ $ DELIMITER;

-- Table des transactions (pour des besoins supplémentaires de traçabilité)
CREATE TABLE Transactions (
    TransactionID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    -- Référence à l'utilisateur
    OrderID INT,
    -- Référence à la commande
    PaymentID INT,
    -- Référence au paiement
    TransactionDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Amount DECIMAL(10, 2) NOT NULL,
    -- Montant de la transaction
    Status ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
    -- Statut de la transaction
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE,
    FOREIGN KEY (PaymentID) REFERENCES Payments(PaymentID) ON DELETE CASCADE
);