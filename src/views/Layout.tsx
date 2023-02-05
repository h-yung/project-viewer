import Viewer from './../components/viewer/Viewer';


interface LayoutProps{
	localDimensions: {width:number, height:number};
    
}

const AppLayout = ({localDimensions}:LayoutProps)=>{
    return (
        <div className="Layout">
           <>
           <Viewer localDimensions={localDimensions} />
           </>
        </div>
      )
}
export default AppLayout;