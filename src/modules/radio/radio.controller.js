import HTTPStatus from 'http-status';
import Radio from './radio.model';

export const getRadio = async (req, res) => {
  // console.log("bjasjagha");

  const id = req.params.id;


  const radio = await Radio.findById(id);
  if (!radio) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(radio);
};

export const getAllRadioStations = async (req, res) => {
  console.log('hshhshsh');
  const radio = await Radio.findAll();
  res.status(HTTPStatus.OK).json(radio);
};

export const createRadio = async (req, res) => {
  const radio = await Radio.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(radio);
};

export const updateRadio = async (req, res) => {
  const id = req.params.id;

  const radio = await Radio.findById(id);
  if (!radio) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    radio[key] = req.body[key];
  });

  await radio.save();

  res.status(HTTPStatus.OK).json(radio.toJson());
};


export const deleteRadio = async (req, res) => {
  const id = req.params.id;

  const radio = await Radio.findById(id);
  if (!radio) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await radio.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
