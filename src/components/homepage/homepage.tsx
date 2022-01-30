import ClaimModule from "../bundle-module/claim";
import ClaimOptions from "../bundle-module/claimOptions";
import Drop from "../bundle-module/drop"
import UseModule from "../bundle-module/useModule";
import Card from "../card/card";
import "./homepage.css"
import { Buffer } from "buffer"


const Homepage = () => {
    
    const dropModule = UseModule();
    window.Buffer = Buffer;

    return (
        <>

            <div className="cards">
                <Card title='Create a NFT drop'
                    body={<Drop dropModule = {dropModule}/>}
                />
                <Card title='Set the Claim Options'
                    body={<ClaimOptions dropModule = {dropModule} />}
                />

            </div>

            <ClaimModule />
        </>
    );
};
export default Homepage;