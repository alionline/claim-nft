import { useEffect, useState } from "react";
import "./bundle.css"
import UseModule from "./useModule";
import { ethers } from "ethers";

const ClaimOptions = (props: any) => {



    let [startInputValue, setStartInputValue] = useState('');
    let [maxQuantInputValue, setMaxQuantInputValue] = useState('');
    let [mqptInputValue, setMQPTInputValue] = useState('');
    let [priceInputValue, setPriceInputValue] = useState('');
    let [waitInputValue, setWaitInputValue] = useState('');
    let [allowListInputValue, setAllowListInputValue] = useState('');

    const handleSubmit = (event: any) => {


        event.preventDefault();
        setTokenClaimConditions();

        console.log("klik claim");
    }

    const setTokenClaimConditions = async () => {
        console.log('print module:')
        console.log(props.dropModule)

        console.log(startInputValue);
        console.log(maxQuantInputValue);
        console.log(mqptInputValue);
        console.log(priceInputValue);
        console.log(waitInputValue);
        console.log(allowListInputValue);

        const factory = await props.dropModule!.getClaimConditionsFactory();
        // console.log(factory)
        // console.log(Object.keys(factory))
        // for(var x in factory){
        //     console.log(factory[x])
        // }

        // second wallet 0x25FFd9f1450bc3A12b34A21989CDd26fb311C2d1
        

        // Define claim phase.
        try {

            const claimPhase = await factory.newClaimPhase({
                startTime: new Date(startInputValue),
                maxQuantity: maxQuantInputValue,
                maxQuantityPerTransaction: mqptInputValue,
            });

        //     console.log(claimPhase)
        // console.log(Object.keys(claimPhase))
        // for(var x in claimPhase){
        //     console.log(claimPhase[x])
        // }


            // Set price.
            claimPhase.setPrice(priceInputValue);

            // Set wait time between claims.
            claimPhase.setWaitTimeBetweenClaims(waitInputValue);

            // Allow snapshot for the specified list.
            const allowList = allowListInputValue.split(" ");
            // const allowList = allowListInputValue;
            // [
            //   "[ALLOWED_ADDRESS_1]",
            //   "[ALLOWED_ADDRESS_2]",
            //   "[ALLOWED_ADDRESS_3]",
            //   "[ALLOWED_ADDRESS_4]",
            // ];

            claimPhase.setSnapshot(allowList);

            // Set claim conditions.
            await props.dropModule!.setClaimConditions(factory);

        } catch (e) {
            console.log(e)
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Start time:
                    <input
                        type="text"
                        name="name"
                        placeholder="MM DD YYYY"
                        value={startInputValue || ""}
                        onChange={e => setStartInputValue(e.target.value)}
                    />
                </label>
                <label>Max Quantity:
                    <input
                        type="text"
                        name="description"
                        value={maxQuantInputValue || ""}
                        onChange={e => setMaxQuantInputValue(e.target.value)}
                    />
                </label>
                <label>Max Quantity per transaction:
                    <input
                        type="text"
                        name="image"
                        value={mqptInputValue || ""}
                        onChange={e => setMQPTInputValue(e.target.value)}
                    />
                </label>
                <label>Price:
                    <input
                        type="text"
                        name="image"
                        value={priceInputValue || ""}
                        onChange={e => setPriceInputValue(e.target.value)}
                    />
                </label>
                <label>Waiting time:
                    <input
                        type="text"
                        name="image"
                        value={waitInputValue || ""}
                        onChange={e => setWaitInputValue(e.target.value)}
                    />
                </label>
                <label>Allowed list (seperate wallets with a space please):
                    <textarea
                        name="image"
                        value={allowListInputValue || ""}
                        onChange={e => setAllowListInputValue(e.target.value)}
                    />
                </label>
                <input type="submit" className="submitButton" />
            </form>
        </>
    );
};
export default ClaimOptions;