export class Plan {
  name: string;
  postMonth: string;
  assistanceType: Array<string>;
  cost: number;
  featured : boolean;

  constructor( plan:{
    name?: string,
    postMonth?: string,
    assistanceType?: Array<string>,
    cost?: number,
    featured?: boolean}) {
    this.name = plan.name || "";
    this.postMonth = plan.postMonth || "";
    this.assistanceType= plan.assistanceType || [];
    this.cost = plan.cost || 0;
    this.featured = plan.featured || false;
  }

}

