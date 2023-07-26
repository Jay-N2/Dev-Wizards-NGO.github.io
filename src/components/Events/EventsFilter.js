import React from "react";
import "./EventsFilter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import jQuery from "jquery";

const EventsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  jQuery(".events-filter select").on("mouseclick", function () {
    jQuery(".events-filter select").slideToggle();
  });

  return (
    <div className="events-filter ">
      <div className="events-filter__control">
        <label>Filter by year :</label>

        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default EventsFilter;
