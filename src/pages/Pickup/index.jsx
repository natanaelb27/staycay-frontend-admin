/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Label from '../../components/common/Label';
import Select from '../../components/common/Select';
import { useGetPickupStatusesQuery, useLazyGetPickupDetailsQuery } from '../../store/slices/apiSlice';
import {
  Container,
  Title,
  MaxSelectionContainer,
  MinSelectionContainer,
  SpanSelection,
  PickupContainer,
  PaginationContainer,
} from './style';

import { PickupDetailsCard, Pagination } from '../../components';

function Pickup() {
  const [getPickupDetails, {
    data: pickupData,
    isLoading: pickupLoading,
  }] = useLazyGetPickupDetailsQuery();

  const {
    data: pickupStatusData,
  } = useGetPickupStatusesQuery();
  const [active, setActive] = useState('all');
  const [filterPickupStatusName, setFilterPickupStatusName] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 4;

  const handleClick = (e) => {
    setCurrentPage(1);
    setActive(e.target.id);
    setFilterPickupStatusName(e.target.id);
    getPickupDetails({ filterPickupStatusName: e.target.id, limit, page: 1 });
  };

  useEffect(() => {
    getPickupDetails({ filterPickupStatusName, limit, page: currentPage });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getPickupDetails({ filterPickupStatusName, limit, page });
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
        className={active === item.pickup_status_name ? 'active' : undefined}
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
    setActive(e.target.value);
    setFilterPickupStatusName(e.target.value);
    getPickupDetails({ filterPickupStatusName: e.target.value, limit, page: 1 });
  };

  return (
    <Container>
      <Title>Pickups</Title>
      <MaxSelectionContainer>
        <SpanSelection id="all" className={active === 'all' ? 'active' : undefined} onClick={handleClick}>All</SpanSelection>
        {renderMaxSelections()}
      </MaxSelectionContainer>
      <MinSelectionContainer>
        <Label>
          <Select
            value={filterPickupStatusName}
            handleChange={handleSelectChange}
          >
            <option value="all">All</option>
            {renderMinSelections()}
          </Select>
        </Label>
      </MinSelectionContainer>
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
    </Container>
  );
}

export default Pickup;
