import { useState } from "react";
import { Pagination } from "../../types/Pagination";

const PaginationProducts = ({ currentPage, onPageChange }: Pagination) => {
  const [number, setNumber] = useState(1);
  const [nextButtonVisible, setNextButtonVisible] = useState(true);

  //Monstrando quantas opções de paginação aparece
  const pages = [{ page: number }, { page: number + 1 }, { page: number + 2 }];

  //Função lógica de navegação para a próxima página - quando acionada o botão next some após chegar no número 10
  function Next() {
    if (number < 8) {
      setNumber((prevNumber) => prevNumber + 1);
      onPageChange(number + 1);
      setNextButtonVisible(number + 1 < 8);
    }
  }

  //Função lógica de navegação para voltar a página - quando acionada o botão prev some quando chegar no número 1
  function Prev() {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
      onPageChange(number - 1);
      setNextButtonVisible(true);
    }
  }

  //Lógica do onclick para mudança de página
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  //Retornando o layout da paginação
  return (
    <div className="flex justify-center md:flex md:justify-center sm:gap-8 rounded-lg font-poppins text-base p-6 transition-all">
      <button
        onClick={Prev}
        className={`px-1 h-12 md:px-4 rounded-lg ${
          number === 1
            ? "hidden"
            : "bg-customYellow2 hover:bg-customPrimary hover:text-white mr-2"
        }`}
      >
        <h3>Prev</h3>
      </button>

      {pages.map((pg, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(pg.page)}
          className={`text-lg rounded-lg h-12 w-14 mr-2 ${
            currentPage === pg.page
              ? " bg-customPrimary text-white"
              : "bg-customYellow2"
          }`}
        >
          {pg.page}
        </button>
      ))}

      <button
        onClick={Next}
        className={`px-1 h-12 md:px-4 rounded-lg ${
          nextButtonVisible
            ? "bg-customYellow2 hover:bg-customPrimary hover:text-white"
            : "hidden"
        }`}
      >
        <h3>Next</h3>
      </button>
    </div>
  );
};

export default PaginationProducts;
