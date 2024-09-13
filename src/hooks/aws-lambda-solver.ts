import { LambdaClient, InvokeCommand, InvocationType } from "@aws-sdk/client-lambda";
import dotenv from "dotenv";


dotenv.config();

const {
    REACT_APP_AWS_ACCESS_KEY_ID,
    REACT_APP_AWS_SECRET_ACCESS_KEY,
    REACT_APP_AWS_REGION,
    REACT_APP_LAMBDA_FUNCTION_NAME
} = process.env;

console.log(REACT_APP_AWS_ACCESS_KEY_ID, REACT_APP_AWS_SECRET_ACCESS_KEY, REACT_APP_AWS_REGION, REACT_APP_LAMBDA_FUNCTION_NAME);

if (!REACT_APP_AWS_ACCESS_KEY_ID || !REACT_APP_AWS_SECRET_ACCESS_KEY || !REACT_APP_AWS_REGION || !REACT_APP_LAMBDA_FUNCTION_NAME) {
    throw new Error("Missing required environment variables.");
}

const client = new LambdaClient({ region: REACT_APP_AWS_REGION });

interface InvokeCommandInput {
    FunctionName: string;
    InvocationType: InvocationType;
    LogType?: "None" | "Tail";
    ClientContext?: string;
    Payload?: Uint8Array;
    Qualifier?: string;
}

export const fetchSolution = (puzzle: string[][]|number[][]) => {
    const input:InvokeCommandInput = { // InvocationRequest
        FunctionName: REACT_APP_LAMBDA_FUNCTION_NAME, // required
        InvocationType: "RequestResponse" ,
        LogType: "Tail",
        // ClientContext: "STRING_VALUE",
        Payload: Buffer.from(JSON.stringify({ sudokuBoard: puzzle})) // e.g. Buffer.from("") or new TextEncoder().encode("")
        // Qualifier: "STRING_VALUE",
      };
    const command = new InvokeCommand(input);
    return client.send(command)
    // .then((response) =>  {
    //     return(JSON.parse(Buffer.from(response.Payload as Uint8Array).toString()))
    // });
    // console.log(response);
    // return "false";
}

