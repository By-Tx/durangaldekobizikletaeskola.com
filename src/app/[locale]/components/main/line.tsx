


interface lProps {
  
  color?: string;
  
}
const line: React.FC<lProps> = ({ color = ""}) => {
  return (
    <div className={`${color ? color : 'bg-customDarkBlue'} w-full h-3 mt-33`}></div>
  );
}
export default line;