// import React, { useState } from "react";
// import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

// const CollapsibleSidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <ProSidebar collapsed={collapsed}>
//         <SidebarHeader>
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="text-white p-4"
//           >
//             {collapsed ? "⏵" : "⏴"}
//           </button>
//         </SidebarHeader>
//         <Menu iconShape="square">
//           <MenuItem>Dashboard</MenuItem>
//           <MenuItem>Profile</MenuItem>
//           <MenuItem>Settings</MenuItem>
//         </Menu>
//       </ProSidebar>

//       {/* Content */}
//       <div className="flex-1 p-6">
//         <h1 className="text-2xl">Welcome to the Dashboard</h1>
//         {/* Le contenu de votre tableau de bord ou autre contenu */}
//       </div>
//     </div>
//   );
// };

// export default CollapsibleSidebar;
