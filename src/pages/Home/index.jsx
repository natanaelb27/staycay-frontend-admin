import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Pagination, MainContainer, Card, SkeletonCard,
} from '../../components';
import { useLazyGetHouseQuery } from '../../store/slices/apiSlice';
import {
  CardContainer,
  SortContainer,
} from './style';
import Select from '../../components/common/Select';
import Label from '../../components/common/Label';

function Home() {
  const {
    filterHouseName, filterCity, filterCheckInDate, filterCheckOutDate,
  } = useSelector((state) => state.FilterHouse);

  const [sortInput, setSortInput] = useState({
    sortBy: 'name',
    sort: 'asc',
  });

  const [getHouse, {
    data: houseData,
    error: houseError,
    isFetching: houseLoading,
  }] = useLazyGetHouseQuery({
    filterHouseName,
    filterCity,
    filterCheckInDate,
    filterCheckOutDate,
    sortBy: sortInput.sortBy,
    sort: sortInput.sort,
  });

  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
    getHouse({
      filterHouseName,
      filterCity,
      filterCheckInDate,
      filterCheckOutDate,
      sortBy: sortInput.sortBy,
      sort: sortInput.sort,
      limit,
      page: 1,
    });
  }, [filterHouseName,
    filterCity,
    filterCheckInDate,
    filterCheckOutDate,
    sortInput.sortBy,
    sortInput.sort]);

  const skeletonLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const renderLoading = () => (
    skeletonLoading?.map((item) => (<SkeletonCard key={item} />))
  );

  const renderHouses = () => (
    houseData?.data.house.map((item) => {
      if (item.house_photo.length <= 0) {
        const nullHousePhoto = [{
          photo_id: 0,
          photo: 'https://res.cloudinary.com/dbhvedme6/image/upload/v1666614484/no-photo_g1qmse.webp',
        }];
        return (
          <Card
            key={item.house_id}
            houseID={item.house_id}
            housePhoto={nullHousePhoto}
            name={item.house_name}
            location={item.house_city_name}
            price={item.house_price}
            linkTo={`/house/${item.house_id}`}
          />
        );
      }

      return (
        <Card
          key={item.house_id}
          houseID={item.house_id}
          housePhoto={item.house_photo}
          name={item.house_name}
          location={item.house_city_name}
          price={item.house_price}
          linkTo={`/house/${item.house_id}`}
        />
      );
    })
  );

  const handleChangeSortInput = (e) => {
    setSortInput({ ...sortInput, [e.target.name]: e.target.value });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getHouse({
      filterHouseName,
      filterCity,
      filterCheckInDate,
      filterCheckOutDate,
      sortBy: sortInput.sortBy,
      sort: sortInput.sort,
      limit,
      page,
    });
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <MainContainer>
      <SortContainer>
        <Label>
          Sort By
          <Select
            selectName="sortBy"
            selectValue={sortInput.sortBy}
            handleChange={handleChangeSortInput}
          >
            <option
              value="name"
            >
              House Name

            </option>
            <option value="price">Rent Price</option>
            <option value="city_name">City</option>
          </Select>
        </Label>
        <Label>
          Sort
          <Select
            selectName="sort"
            selectValue={sortInput.sort}
            handleChange={handleChangeSortInput}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </Label>
      </SortContainer>
      <CardContainer>
        {houseLoading && (renderLoading())}
        {!houseLoading && houseError && <p>{houseError}</p>}
        {!houseLoading && !houseError && (
          renderHouses()
        )}
      </CardContainer>
      {houseData?.data.pagination && (
      <Pagination
        currentPage={currentPage}
        totalPages={houseData?.data.pagination.total_pages}
        onPageChange={handlePageChange}
      />
      )}
    </MainContainer>
  );
}

export default Home;
