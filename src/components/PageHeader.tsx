interface componentProps {
    pageName: string;
  }
  

const PageHeader:React.FC<componentProps> = ({pageName}) => {
  return (
    <h1 className="font-extrabold text-5xl bg-[url('../src/assets/headerBg.png')] bg-contain text-white p-7 text-center alien-center min-h-24">{pageName}</h1>
  )
}

export default PageHeader