//Tipando os items da paginação

export interface Pagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
