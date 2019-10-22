import HTTPStatus from 'http-status';
import Channel from './channel.model';

export const getChannel = async (req, res) => {
  const id = req.params.id;

  const channel = await Channel.findById(id);
  if (!channel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(channel);
};

export const createChannel = async (req, res) => {
  const channel = await Channel.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(channel);
};

export const updateChannel = async (req, res) => {
  const id = req.params.id;

  const channel = await Channel.findById(id);
  if (!channel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    channel[key] = req.body[key];
  });

  await channel.save();

  res.status(HTTPStatus.OK).json(channel.toJson());
};


export const deleteChannel = async (req, res) => {
  const id = req.params.id;

  const channel = await Channel.findById(id);
  if (!channel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await channel.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
