import {
  checkTokenIdIsOwnedByLandGranter,
  grantLandTile
} from '@server/LandGranter';
import { NextApiHandler } from 'next';

const api: NextApiHandler = async (req, res) => {
  const {
    tokenId,
    recipient,
    coinCreator
  }: { tokenId?: number; recipient?: string; coinCreator?: string } = req.body;

  if (tokenId == undefined || !recipient || !coinCreator)
    return res
      .status(400)
      .json({ error: 'Missing coin data, recipient, or creator.' });

  const isGrantable = await checkTokenIdIsOwnedByLandGranter(tokenId);
  if (!isGrantable)
    return res.status(400).json({ error: 'Coin has already been claimed.' });

  const tx = await grantLandTile(tokenId, recipient, coinCreator);
  const reciept = await tx.wait(1);
  return res.json({ tx: reciept.transactionHash });
};

export default api;
