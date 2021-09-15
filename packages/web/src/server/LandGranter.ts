import { ContractTransaction } from '@ethersproject/contracts';
import { LandGranter__factory } from '@sdk/factories/LandGranter__factory';
import { ExquisiteLand__factory } from '@sdk/factories/ExquisiteLand__factory';

// @ts-ignore
import steggy from 'steggy';
import getJsonRpcProvider from '@app/features/getJsonRpcProvider';
import { Wallet } from '@ethersproject/wallet';

export const getTokenIDForCoin = (coinB64: string): number | null => {
  try {
    const revealed = steggy.reveal(process.env.LAND_GRANTER_SALT)(
      Buffer.from(coinB64, 'base64')
    );
    return parseInt(revealed.toString());
  } catch (err) {
    return null;
  }
};

export const checkTokenIdIsOwnedByLandGranter = async (
  tokenId: number
): Promise<boolean> => {
  try {
    const contract = ExquisiteLand__factory.connect(
      process.env.NEXT_PUBLIC_TILE_CONTRACT_ADDRESS as string,
      getJsonRpcProvider()
    );
    const ownerAddress = await contract.ownerOf(tokenId);
    return (
      ownerAddress.toLowerCase() ===
      (
        process.env.NEXT_PUBLIC_LAND_GRANTER_CONTRACT_ADDRESS as string
      ).toLowerCase()
    );
  } catch (err) {
    return false;
  }
};

export const grantLandTile = (
  tokenId: number,
  recipient: string
): Promise<ContractTransaction> => {
  const wallet = new Wallet(
    process.env.CONTRACT_OWNER_PRIVATE_KEY as string,
    getJsonRpcProvider()
  );
  const contract = LandGranter__factory.connect(
    process.env.NEXT_PUBLIC_LAND_GRANTER_CONTRACT_ADDRESS as string,
    wallet
  );
  return contract.grant(tokenId, recipient);
};

// Should only be called by admin
export const generateCoin = (tokenId: number): Buffer => {
  const demoCoinBuffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAetSURBVHgB7dUBEQAgDAAhNbnNZw7/oAR7Zu4CAL52FgDwPaEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIEDoABAgdAAIEDoABAgdAAKEDgABQgeAAKEDQIDQASBA6AAQIHQACBA6AAQIHQAChA4AAUIHgAChA0CA0AEgQOgAECB0AAgQOgAECB0AAoQOAAFCB4AAoQNAgNABIOABOmgHZdtfLdQAAAAASUVORK5CYII=',
    'base64'
  );

  // Todo: switch to static base image
  // and layer on top of it with `sharp` before concealing

  const concealed: Buffer = steggy.conceal(process.env.LAND_GRANTER_SALT)(
    demoCoinBuffer,
    `${tokenId}`
  );
  return concealed;
};
