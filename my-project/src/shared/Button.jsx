
const Button=({content,className})=>{
  return (
    <>
<button className={`py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-nonebtn  ${className}`}>{content}</button>
    </>
  );
}
export default Button;