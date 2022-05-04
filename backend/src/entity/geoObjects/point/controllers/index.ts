import createPoint from './create';
import getPoints from './get';
import getPointById from './getById';
import updatePoint from './update';
import deletePoint from './delete';

class PointController {
  public create = createPoint;

  public get = getPoints;

  public getById = getPointById;

  public update = updatePoint;

  public delete = deletePoint;
}

export default new PointController();
