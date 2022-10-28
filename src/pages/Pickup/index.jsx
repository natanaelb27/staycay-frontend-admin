import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import Label from '../../components/common/Label';
import Select from '../../components/common/Select';
import Input from '../../components/common/Input';
import Loading from '../../components/common/Loading';
import { SkeletonText, PickupDetailsCard, Pagination } from '../../components';
import { useGetPickupStatusesQuery, useLazyGetPickupDetailsQuery } from '../../store/slices/apiSlice';
import {
  MainContainer,
  Title,
  InputContainer,
  MaxSelectionContainer,
  MinSelectionContainer,
  LoadingContainer,
  LoadingPickupCardContainer,
  SpanSelection,
  PickupContainer,
  PaginationContainer,
} from './style';

function Pickup() {
  const [getPickupDetails, {
    data: pickupData,
    error: pickupError,
    isLoading: pickupLoading,
  }] = useLazyGetPickupDetailsQuery();

  const {
    data: pickupStatusData,
    error: pickupStatusError,
    isLoading: pickupStatusLoading,
  } = useGetPickupStatusesQuery();
  const [filterPickupStatusName, setFilterPickupStatusName] = useState('all');
  const [filterReservationCode, setFilterReservationCode] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 3;

  const handleClick = (e) => {
    setCurrentPage(1);
    setFilterPickupStatusName(e.target.id);
    getPickupDetails({
      filterPickupStatusName: e.target.id, filterReservationCode, limit, page: 1,
    });
  };

  useEffect(() => {
    getPickupDetails({
      filterPickupStatusName, filterReservationCode, limit, page: currentPage,
    });
  }, []);

  const pickupRef = useRef(null);

  const executeScroll = () => pickupRef.current.scrollIntoView();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getPickupDetails({
      filterPickupStatusName, filterReservationCode, limit, page,
    });
    executeScroll();
  };

  const renderPickups = () => (
    pickupData?.data.pickup.map((item) => (
      <PickupDetailsCard
        key={item.pickup_id}
        pickupData={item}
      />
    ))
  );

  const renderMaxSelections = () => (
    pickupStatusData?.data.pickup_status.map((item) => (
      <SpanSelection
        key={item.pickup_status_id}
        id={item.pickup_status_name}
        className={filterPickupStatusName === item.pickup_status_name ? 'active' : undefined}
        onClick={handleClick}
      >
        {item.pickup_status_name}
      </SpanSelection>
    ))
  );

  const renderMinSelections = () => (
    pickupStatusData?.data.pickup_status.map((item) => (
      <option
        key={item.pickup_status_id}
        value={item.pickup_status_name}
      >
        {item.pickup_status_name}
      </option>
    ))
  );

  const handleSelectChange = (e) => {
    setCurrentPage(1);
    setFilterPickupStatusName(e.target.value);
    getPickupDetails({
      filterPickupStatusName: e.target.value, filterReservationCode, limit, page: 1,
    });
  };

  const handleInputChange = (e) => {
    setCurrentPage(1);
    setFilterReservationCode(e.target.value);
    getPickupDetails({
      filterPickupStatusName, filterReservationCode: e.target.value, limit, page: 1,
    });
  };

  return (
    <MainContainer ref={pickupRef}>
      <Title>Pickups</Title>
      <InputContainer>
        <Label>
          Reservation Code
          <Input inputType="text" handleChange={handleInputChange} inputPlaceholder="Search reservation code" />
        </Label>
      </InputContainer>
      <MaxSelectionContainer>
        {
          pickupStatusLoading && (<Loading />)
        }
        {
          !pickupStatusLoading && !pickupStatusError && (
            <>
              <SpanSelection id="all" className={filterPickupStatusName === 'all' ? 'active' : undefined} onClick={handleClick}>All</SpanSelection>
              {renderMaxSelections()}
            </>
          )
        }
      </MaxSelectionContainer>
      <MinSelectionContainer>
        {
          pickupStatusLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
          )
        }
        {
          !pickupStatusLoading && !pickupStatusError && (
            <Label>
              Filter By
              <Select
                selectValue={filterPickupStatusName}
                handleChange={handleSelectChange}
              >
                <option value="all">All</option>
                {renderMinSelections()}
              </Select>
            </Label>
          )
        }

      </MinSelectionContainer>
      {
        pickupLoading && (
        <LoadingPickupCardContainer>
          <SkeletonText classes="full" />
        </LoadingPickupCardContainer>
        )
      }
      {
        !pickupLoading && !pickupError && (
          <>
            <PickupContainer>
              {renderPickups()}
            </PickupContainer>
            {pickupData?.data.pagination && (
            <PaginationContainer>
              <Pagination
                currentPage={currentPage}
                totalPages={pickupData?.data.pagination.total_pages}
                onPageChange={handlePageChange}
              />
            </PaginationContainer>
            )}

          </>
        )
      }

      <ToastContainer />
    </MainContainer>
  );
}

export default Pickup;
