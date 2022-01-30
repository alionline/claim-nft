import { useState } from "react";
import "./bundle.css"
import UseModule from "./useModule";
import fot from "../../circle.png"

const Drop = (props: any) => {

    // const dropModule = UseModule();

    let [mintInputValue, setMintInputValue] = useState('');
    let [nameInputValue, setNameInputValue] = useState('');
    let [descriptionInputValue, setDescriptionInputValue] = useState('');
    let [imageInputValue, setImageInputValue] = useState<File>();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(imageInputValue);


        // try {
        //     let ans = await dropModule?.getAll();
        //     console.log(ans)
        //   } catch (err) {
        //     console.log(err);
        //   }

        //"https://cloudflare-ipfs.com/ipfs/QmY4i23h1YG3JusYSFFKBCkRdUqGyNqqR3NgLnG46jXXmy/0.png"
        //"ipfs://QmYeRnNkZxTGNoZFyvYmUyKJ96DVWoUf4j37JmWpgRqtux/0"

        try {
            await props.dropModule?.createBatch([{
                name: nameInputValue,
                description: descriptionInputValue,
                image: imageInputValue,
                properties: {},
            }]);
        } catch (err) {
            console.log(err);
        }

    }



    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={nameInputValue || ""}
                        onChange={e => setNameInputValue(e.target.value)}
                    />
                </label>
                <label>Description:
                    <input
                        type="text"
                        name="description"
                        value={descriptionInputValue || ""}
                        onChange={e => setDescriptionInputValue(e.target.value)}
                    />
                </label>
                <label>Image:
                    <input
                        type="file"
                        name="image"
                        onChange={e => setImageInputValue(e.target.files![0])}
                    />
                </label>
                <input type="submit" className="submitButton" />
            </form>
        </>
    );
};
export default Drop;