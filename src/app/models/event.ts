export class Event{
  constructor(
   public id?:string,
   public reminder?:boolean,

   public dateStart?:string,
   public dateEnd?:string,
   public guests?:string,
   public location?:string,

   public description?:string,
   public dateDebut?:string,
   public dateFin?:string,
  ){}
}
