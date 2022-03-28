
import { Results } from "./results.model";

export interface Author {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex:number;
  results:Results[]
  }