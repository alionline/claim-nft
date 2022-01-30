import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useMemo } from "react";
import { Signer } from "ethers";

const UseModule = () => {
  const { provider } = useWeb3();
  
  const sdk = useMemo(() => {
    if (provider) {
      return new ThirdwebSDK(provider?.getSigner() as Signer);
    }

    return undefined;
  }, [provider]);

//instantiate the sdk
  const dropModule = useMemo(() => {
    if (sdk) {
      return sdk.getDropModule("0xE9B3021dE710ecAD50De2df3010DbA0cf2D368D8");
    }

    return undefined;
  }, [sdk]);

  console.log(dropModule)
  return dropModule;
  
}

export default UseModule

