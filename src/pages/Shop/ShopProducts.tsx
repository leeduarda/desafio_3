import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../types/Product";
import { formatPrice } from "../../ts/formatPrice";
import Paginacao from "../../pages/Shop/PaginationProducts";
import { Link } from "react-router-dom";

const ShopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const iconShare =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/share.png";
  const iconCompare =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/compare.png";
  const iconHeart =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/heart.png";

  //Pegando os produtos do json, passando um tempo de 1000 segundos de carregamento dos produtos
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setTimeout(() => {
          setProducts(response.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  //Calculando quantos produtos aparecem em cada pagina
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProducts = products.slice(firstProduct, lastProduct);
  const totalPages = products.length / productsPerPage;

  //Renderizar como ficaria o disconto nos produtos
  const renderDiscount = (discount: number) => {
    return (
      <div className="flex justify-center items-center absolute top-8 right-5 bg-customRedAccents w-9 h-9 p-5 rounded-full text-center text-base text-customWhite font-normal">
        <p>-{discount}%</p>
      </div>
    );
  };

  //Renderizar o valor com desconto de 30% ou 50% e o valor antigo
  const renderPrice = (product: Product) => {
    if (product.discountTrinta || product.discountCinquenta) {
      return (
        <div className="flex justify-between flex-wrap">
          <p className="font-poppins text-xl text-customGray1 font-semibold">
            {formatPrice(product.priceDiscount)}
          </p>
          <p className="text-base text-customGray4 line-through">
            {formatPrice(product.price)}
          </p>
        </div>
      );
    }

    //Formatando o preço chamando a função formatPrice
    return (
      <div className="flex justify-between flex-wrap">
        <p className="font-poppins text-xl text-customGray1 font-semibold">
          {formatPrice(product.price)}
        </p>
      </div>
    );
  };

  //Retornando o layout dos produtos e carregamento antes de exibir os produtos
  return (
    <section className="mb-16">
      <div className="relative overflow-hidden ">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="p-10 flex flex-col justify-center gap-8 items-center flex-wrap md:flex md:flex-row">
            {currentProducts.map((product) => (
              <Link to="/productDetail">
                <div key={product.id} className="group relative bg-customGray8">
                  {product.discountTrinta && renderDiscount(30)}
                  {product.discountCinquenta && renderDiscount(50)}
                  {product.newProduct && (
                    <div className="flex justify-center items-center absolute top-8 right-5 bg-customGreenAccents w-9 h-9 p-5 rounded-full text-center text-base text-customWhite font-normal">
                      <p>New</p>
                    </div>
                  )}
                  <div className="w-full object-cover">
                    <img src={product.imgUrl} alt={product.name} />
                  </div>
                  <div className="absolute h-full w-full bg-customGray1/70 flex flex-col items-center justify-center gap-3 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link to="/">
                      <button className="bg-customWhite text-customPrimary text-base font-poppins font-semibold py-2 px-12 hover:scale-110 transition-all">
                        Add to cart
                      </button>
                    </Link>

                    <div className="flex flex-row items-center gap-5 text-customWhite text-base font-poppins font-semibold">
                      <Link to="/">
                        <button className="flex flex-row items-center gap-1">
                          <img src={iconShare} />
                          Share
                        </button>
                      </Link>
                      <Link to="/">
                        <button className="flex flex-row items-center gap-1">
                          <img src={iconCompare} />
                          Compare
                        </button>
                      </Link>
                      <Link to="/">
                        <button className="flex flex-row items-center gap-1">
                          <img src={iconHeart} />
                          Like
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5 pb-5 pt-2 px-5">
                    <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                      {product.name}
                    </h4>
                    <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                      {product.subtitle}
                    </p>
                    {renderPrice(product)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/*Importando o componente de paginação*/}
      <Paginacao
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default ShopProducts;
