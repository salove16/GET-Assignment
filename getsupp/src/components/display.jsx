import { useCallback, useEffect } from "react";
import { useState } from "react";
import { SearchInput } from "./search";
import BasicModal from "./DetailsUserCard";
import "./main.css";
import { useRef } from "react";

export const Display = () => {
  const [Data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pageRef = useRef();

  const lastItemRef = useCallback((item) => {
    if (pageRef.current) {
      pageRef.current.disconnect();
    }

    pageRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (item) {
      pageRef.current.observe(item);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async (text) => {
    try {
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      if (text) {
        url = `https://rickandmortyapi.com/api/character/?name=${text}&page=${page}`;
      }
      let res = await fetch(url);

      let data = await res.json();

      if (data.results != undefined) {
        console.log(data.results, "*****", Data);

        return setData((prev) => [...prev, ...data.results]);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchInput prop={getData} setData={setData}></SearchInput>
      <BasicModal
        open={open}
        props={singleData}
        handleClose={handleClose}
      ></BasicModal>

      {Data.map((e, i) => {
        if (Data.length == i + 1) {
          return (
            <div
              key={e.id}
              ref={lastItemRef}
              className="display_flex display_table"
              onClick={() => {
                handleOpen();
                setSingleData(e);
              }}
            >
              <div className="display_flex start">
                <div className="display_image">
                  <img src={e.image} alt="" />
                </div>
                <p>{e.name}</p>
              </div>
              <div className="display_flex end">
                <div
                  className={
                    (e.status && e.species == "Humanoid") || e.status == "Alive"
                      ? "display_status_green"
                      : "display_status_grey"
                  }
                ></div>
                <p>
                  {e.status} - {e.species}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={e.id}
              className="display_flex display_table"
              onClick={() => {
                handleOpen();
                setSingleData(e);
              }}
            >
              <div className="display_flex start">
                <div className="display_image">
                  <img src={e.image} alt="" />
                </div>
                <p>{e.name}</p>
              </div>
              <div className="display_flex end">
                <div
                  className={
                    (e.status && e.species == "Humanoid") || e.status == "Alive"
                      ? "display_status_green"
                      : "display_status_grey"
                  }
                ></div>
                <p>
                  {e.status} - {e.species}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
