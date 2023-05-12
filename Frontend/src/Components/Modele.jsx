import React, { useEffect, useState } from "react";
import { Navbar, Addmodele } from "./index";
import { GetModeles } from "../API/Modele.js";
import { HiFilter } from "react-icons/hi";
import { Button, Dialog } from "@material-tailwind/react";
import ReactPaginate from "react-paginate";

function Modele() {
  const [modeles, setmodeles] = useState([]);
  const [isopen, setisopen] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = modeles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(modeles.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % modeles.length;
    setItemOffset(newOffset);
  };
  const handeladd = () => {
    setisopen(!isopen);
  };
  useEffect(() => {
    async function name() {
      const response = await GetModeles();

      setmodeles(response);
    }
    name();
  }, [isopen]);

  return (
    <div className={"bg-blue-gray-50  min-h-screen "}>
      <Navbar />

      <div className="flex mt-7">
        <div className="m-auto sm:min-w-[80%]">
          <div className="flex justify-start w-[90%] mb-2">
            <Button
              className="flex items-center p-3"
              variant="outlined"
              color="gray"
            >
              <HiFilter /> Filter
            </Button>
          </div>
          <table className="bg-white  border-collapse   text-center text-sm font-light w-[90%] shadow-sm shadow-gray-500 ">
            <thead>
              <tr className="bg-[#1089ff] text-white font-bold">
                <th className="px-6 py-4">Code Modele</th>
                <th className="px-6 py-4">Moteur Puossance </th>
                <th className="px-6 py-4"> Moteur type</th>
                <th className="px-6 py-4"> Cylindree</th>
                <th className="px-6 py-4">BV type</th>
                <th className="px-6 py-4">BV marque </th>
                <th className="px-6 py-4">validite </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((m, index) => (
                <tr
                  key={index}
                  className=" hover:bg-[#3061ac] border-y-[1px] border-gray-500 "
                >
                  <td className="px-6 py-4">{m.id_M}</td>
                  <td className="px-6 py-4">{m.moteur_Puossance}</td>
                  <td className="px-6 py-4">{m.moteur_type}</td>
                  <td className="px-6 py-4">{m.Cylindree}</td>
                  <td className="px-6 py-4">{m.BV_type}</td>
                  <td className="px-6 py-4">{m.BV_marque}</td>
                  <td className="px-6 py-4 flex justify-center">
                    {m.validite ? (
                      <img
                        className="w-1 h-1 hover:bg-blue-gray-100"
                        src="/assets/valide.png"
                      ></img>
                    ) : (
                      <img
                        src="../assets/notvalide.png"
                        className="w-4 h-4 hover:bg-blue-gray-100"
                      ></img>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <Button
                  onClick={handeladd}
                  className="flex h-fit text-xs justify-center p-2 my-2 gap-1 mx-auto w-20"
                  variant="outlined"
                >
                  Add
                </Button>

                <td />
                <td />
                <td />
                <td />

                <div className=" table-cell font-bold text-lg  col-span-2">
                  Total: <span className="font-body"> {modeles.length}</span>
                </div>
              </tr>
            </tbody>
          </table>
          <ReactPaginate
            className="flex gap-20 justify-center"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>

      <Dialog open={isopen} handler={handeladd} size="xl">
        <Addmodele handeladd={handeladd} />
      </Dialog>
    </div>
  );
}

export default Modele;
