import { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import ModalContact from "./ModalContact";

const FormContact = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    //Salvar os dados no localStorage
    localStorage.setItem("formData", JSON.stringify(data));

    //Limpar o form após o envio
    reset();

    //Vai abrir o modal
    setOpenModal(true);
  };

  return (
    <div className="app-container h-full w-full flex flex-col justify-center items-center gap-9">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2">
          <label className="font-poppins font-medium text-sm mb-2">Your name</label>
          <input
            className={
              errors?.name
                ? "outline-none border border-red-500 placeholder:text-customGray2 placeholder:text-sm p-2 md:pr-44 md:py-3 rounded-lg"
                : "placeholder:text-customGray2 placeholder:text-sm border border-customGray2 p-2 md:pr-44 md:py-3 rounded-lg outline-none"
            }
            type="text"
            placeholder="Abc"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <p className="text-red-500 text-xs">Name is required.</p>
          )}
        </div>

        <div className=" flex flex-col gap-2">
          <label className="font-poppins font-medium text-sm mb-2 mt-5">
            Email address
          </label>
          <input
            className={
              errors?.email
                ? "outline-none border border-red-500 placeholder:text-customGray2 placeholder:text-sm p-2 md:pr-44 md:py-3 rounded-lg"
                : "placeholder:text-customGray2 placeholder:text-sm border border-customGray2 p-2 md:pr-44 md:py-3 rounded-lg outline-none"
            }
            type="email"
            placeholder="Abc@def.com"
            {...register("email", {
              required: true,
              validate: (value) => isEmail(value),
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-red-500 text-xs">Email is required.</p>
          )}
          {errors?.email?.type === "validate" && (
            <p className="text-red-500 text-xs">Email is invalid.</p>
          )}
        </div>

        <div className=" flex flex-col gap-2">
          <label className="font-poppins font-medium text-sm mb-2 mt-5">Subject</label>
          <input
            className={
              errors?.subject
                ? "outline-none border border-red-500 placeholder:text-customGray2 placeholder:text-sm p-2 md:pr-44 md:py-3 rounded-lg"
                : "placeholder:text-customGray2 placeholder:text-sm border border-customGray2 p-2 md:pr-44 md:py-3 rounded-lg outline-none"
            }
            type="text"
            placeholder="This is an optional"
          />
        </div>

        <div className=" flex flex-col gap-2">
          <label className="font-poppins font-medium text-sm mb-2 mt-5">Message</label>
          <input
            className={
              errors?.message
                ? "outline-none border border-red-500 placeholder:text-customGray2 placeholder:text-sm p-2 md:pr-44 md:py-3 rounded-lg"
                : "placeholder:text-customGray2 placeholder:text-sm border border-customGray2 p-2 md:pr-44 md:py-3 rounded-lg outline-none"
            }
            type="text"
            placeholder="Hi! I’d like to ask about"
            {...register("message", { required: true })}
          />
          {errors?.message?.type === "required" && (
            <p className="text-red-500 text-xs">Message is required.</p>
          )}
        </div>

        <div className="font-poppins text-base text-customWhite mt-12">
          <button
            className="bg-customPrimary px-14 py-2 rounded mb-16 transition-all hover:text-customPrimary hover:bg-customWhite hover:ring-1 hover:ring-customPrimary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <ModalContact
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      ></ModalContact>
    </div>
  );
};

export default FormContact;
