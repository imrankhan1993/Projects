
import { Results } from "./results";

export interface Author {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex:number;
  results:Results[]
  }