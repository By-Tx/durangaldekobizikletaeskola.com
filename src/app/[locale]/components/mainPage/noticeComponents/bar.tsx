
interface bProps {
  
    color?: string;
    
  }
  const bar: React.FC<bProps> = ({ color = ""}) => {
    return (
        <div className={`${color ? color : 'bg-customDarkBlue'} w-full h-6 `}></div>
    )
}
export default bar;