export interface AdapterMapper<W, M> {
  /*mapperFromWsToDb(item: W): D;
  mapperFromListWsToListDb(item: Array<W>): Array<D>;

  mapperFromModelToWs(item: D): M;
  mapperFromListDbToListModel(item: Array<D>): Array<M>;*/

  mapperFromWsToModel(item: W): M;
  mapperFromListWsToListModel(item: Array<W>): Array<M>;
}
