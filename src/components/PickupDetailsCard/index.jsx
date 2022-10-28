import React, { useState } from 'react';
import moment from 'moment';
import {
  MainContainer,
  SpanTitle,
  SpanDetail,
  ContentContainer,
  EditButtonContainer,
  EditButton,
  EditContainer,
  SaveButtonContainer,
  PickupStatusContentContainer,
} from './style';
import {
  useGetPickupStatusesQuery,
  useGetHouseByIDQuery,
  useGetUserByIDQuery,
  useGetReservationByIDQuery,
  useUpdatePickupStatusMutation,
} from '../../store/slices/apiSlice';
import Select from '../common/Select';
import Button from '../common/Button';
import { showSuccessToast, showErrorToast } from '../../helpers/Toast';

function PickupDetailsCard({
  pickupData,
}) {
  const {
    data: pickupStatusData,
  } = useGetPickupStatusesQuery();

  const {
    data: houseData,
    isLoading: houseLoading,
  } = useGetHouseByIDQuery({
    houseID: pickupData?.house_id,
    unscoped: 'true',
  });

  const {
    data: reservationData,
    isLoading: reservationLoading,
  } = useGetReservationByIDQuery(pickupData?.reservation_id);

  const {
    data: hostData,
    isLoading: hostLoading,
  } = useGetUserByIDQuery(houseData?.data.host_id, {
    skip: houseData?.data.host_id === undefined,
  });

  const {
    data: userData,
    isLoading: userLoading,
  } = useGetUserByIDQuery(reservationData?.data.reservation.user_id, {
    skip: reservationData?.data.reservation.user_id === undefined,
  });

  const [updatePickupStatus] = useUpdatePickupStatusMutation();

  const [isEditStatus, setIsEditStatus] = useState(false);

  const [inputUpdateStatus, setInputUpdateStatus] = useState(pickupData?.pickup_status_id);

  const handleClickEditStatus = () => {
    setInputUpdateStatus(pickupData?.pickup_status_id);
    setIsEditStatus(!isEditStatus);
  };

  const handleInputStatusChange = (e) => {
    setInputUpdateStatus(e.target.value);
  };

  const handleSaveChangeStatus = (e) => {
    e.preventDefault();

    updatePickupStatus({
      pickupID: pickupData?.pickup_id,
      pickupStatusID: inputUpdateStatus,
    })
      .unwrap()
      .then(() => {
        showSuccessToast('Pickup Status Updated Successfully!');
      })
      .catch((error) => {
        if (!error.data) {
          showErrorToast('Server is currently down, please try again later!');
        }
        showErrorToast(error.data.message);
      });
    setIsEditStatus(!isEditStatus);
  };

  const renderPickupStatuses = () => (
    pickupStatusData?.data.pickup_status.map((item) => (
      <option
        key={item.pickup_status_id}
        value={item.pickup_status_id}
        disabled={parseInt(inputUpdateStatus, 10) === parseInt(item.pickup_status_id, 10)}
      >
        {item.pickup_status_name}
      </option>
    ))
  );

  return (
    !houseLoading && !reservationLoading && !hostLoading && !userLoading && (
      <MainContainer>
        <SpanTitle>{reservationData?.data.reservation.reservation_code}</SpanTitle>
        <ContentContainer>
          <SpanTitle>House Name</SpanTitle>
          <SpanDetail>{houseData?.data.house_name}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>House City</SpanTitle>
          <SpanDetail>{houseData?.data.house_city_name}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Host Name</SpanTitle>
          <SpanDetail>{hostData?.data.name}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Host Email</SpanTitle>
          <SpanDetail>{hostData?.data.email}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Guest Name</SpanTitle>
          <SpanDetail>{userData?.data.name}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Guest Email</SpanTitle>
          <SpanDetail>{userData?.data.email}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Check In Date</SpanTitle>
          <SpanDetail>{moment(reservationData?.data.reservation.check_in_date).format('D MMMM YYYY')}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Check Out Date</SpanTitle>
          <SpanDetail>{moment(reservationData?.data.reservation.check_out_date).format('D MMMM YYYY')}</SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Pickup Address</SpanTitle>
          <SpanDetail>
            {pickupData?.pickup_address}
            ,
            {' '}
            {pickupData?.pickup_city_name}
          </SpanDetail>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Pickup Status</SpanTitle>
          <PickupStatusContentContainer>
            {!isEditStatus
              ? (<SpanDetail>{pickupData?.pickup_status_name}</SpanDetail>)
              : (
                <EditContainer>
                  <Select
                    selectValue={inputUpdateStatus}
                    handleChange={handleInputStatusChange}
                  >
                    {renderPickupStatuses()}
                  </Select>
                  <SaveButtonContainer>
                    <Button handleClick={handleSaveChangeStatus}>Save</Button>
                  </SaveButtonContainer>
                </EditContainer>
              )}
            <EditButtonContainer>
              <EditButton type="button" onClick={handleClickEditStatus}>{!isEditStatus ? 'Edit' : 'Cancel'}</EditButton>
            </EditButtonContainer>
          </PickupStatusContentContainer>
        </ContentContainer>
      </MainContainer>
    )
  );
}

export default PickupDetailsCard;
