/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Button from '../../components/common/Button';
import DangerModal from '../../components/common/DangerModal';
import {
  Carousel, SkeletonImage, SkeletonLine, SkeletonText,
} from '../../components';
import {
  useGetHouseByIDQuery,
  useGetHouseStatusesQuery,
  useUpdateHouseByIDMutation,
  useDeleteHouseMutation,
} from '../../store/slices/apiSlice';
import {
  MainContainer,
  HouseTitleContainer,
  HouseImageContainer,
  HouseContentContainer,
  HouseContentDetailsContainer,
  Line,
  HouseStatusContainer,
  ContentContainer,
  SpanTitle,
  SpanDetail,
} from './style';
import { showErrorToast } from '../../helpers/Toast';
import noImageAvailable from '../../assets/no-image-available.jpg';

function House() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    data: houseStatusData,
  } = useGetHouseStatusesQuery();

  const [showTerminateModal, setShowTerminateModal] = useState(false);

  const {
    data: houseData,
    error: houseError,
    isLoading: houseLoading,
  } = useGetHouseByIDQuery(params.houseID);

  const [updateHouse] = useUpdateHouseByIDMutation();

  const [deleteHouse] = useDeleteHouseMutation();

  useEffect(() => {
    if (!houseLoading && houseError && houseError.data.code === 400) {
      navigate('/', { replace: true });
    } else if (!houseLoading && houseError && houseError.data.code === 500) {
      navigate('/InternalServerError');
    }

    // if (!houseLoading && !houseError &&
    // houseData?.data.house_status.toLowerCase() !== 'active') {
    //   navigate('/');
    // }
  }, [houseData?.data.house_status, houseLoading, houseError, navigate]);

  const findHouseStatusIDByName = (statusName) => (
    houseStatusData?.data.house_status.find(
      (item) => item.house_status_name.toLowerCase() === statusName,
    ).house_status_id
  );

  const onClickStatusButton = () => {
    let newHouseStatusID = 0;
    if (houseData?.data.house_status.toLowerCase() === 'active' || houseData?.data.house_status.toLowerCase() === 'inactive') {
      newHouseStatusID = findHouseStatusIDByName('deactivated by admin');
    }

    if (houseData?.data.house_status.toLowerCase() === 'deactivated by admin') {
      newHouseStatusID = findHouseStatusIDByName('active');
    }

    // if (houseStatusData?.data.house_status === 'deactivated by admin') {
    //   newHouseStatusID = findHouseStatusIDByName('active');
    // }

    updateHouse({
      houseID: params.houseID,
      houseStatusID: newHouseStatusID,
    });
  };

  const onClickTerminateHouse = () => {
    setShowTerminateModal(true);
  };

  const onCloseTerminateModal = () => {
    setShowTerminateModal(false);
  };

  const onSubmitTerminateModal = () => {
    deleteHouse(params.houseID)
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        if (!error.data) {
          showErrorToast('Server is currently down, please try again later!');
        }
        showErrorToast(error.data.message);
      })
      .finally(() => {
        setShowTerminateModal(false);
      });
  };

  return (
    <MainContainer>
      <ToastContainer />
      <HouseTitleContainer>
        {houseLoading && <SkeletonLine classes="w-30p" />}
        {!houseLoading && !houseError && (
          <div>
            <h1>{houseData?.data.house_name}</h1>
          </div>
        )}
      </HouseTitleContainer>
      <HouseImageContainer>
        {houseLoading && <SkeletonImage classes="full" />}
        {!houseLoading && !houseError && (
          houseData?.data.house_photo.length >= 1 ? (
            <Carousel housePhoto={houseData?.data.house_photo} />
          ) : (
            <Carousel housePhoto={[{
              photo_id: 0,
              photo: noImageAvailable,
            }]}
            />
          )
        )}
      </HouseImageContainer>
      <HouseContentContainer>
        {houseLoading && <SkeletonText classes="full" />}
        {!houseLoading && !houseError && (
          <div>
            <HouseContentDetailsContainer>
              <h2>
                House hosted by
                {' '}
                {houseData?.data.host_name}
              </h2>
              <Line />
              <ContentContainer>
                <SpanTitle>City</SpanTitle>
                <SpanDetail>
                  {houseData?.data.house_city_name}
                  {' '}
                </SpanDetail>
              </ContentContainer>
              <ContentContainer>
                <SpanTitle>Max Guest</SpanTitle>
                <SpanDetail>
                  {houseData?.data.house_max_guest}
                  {' '}
                  guests
                </SpanDetail>
              </ContentContainer>
              <ContentContainer>
                <SpanTitle>Description</SpanTitle>
                <SpanDetail>
                  {houseData?.data.house_description}
                </SpanDetail>
              </ContentContainer>
              <HouseStatusContainer>
                <ContentContainer>
                  <SpanTitle>House Status</SpanTitle>
                  <SpanDetail>
                    {houseData?.data.house_status}
                  </SpanDetail>
                </ContentContainer>
                <Button
                  classes={houseData?.data.house_status.toLowerCase() === 'active' || houseData?.data.house_status.toLowerCase() === 'inactive' ? 'danger' : 'blue'}
                  handleClick={onClickStatusButton}
                >
                  {houseData?.data.house_status.toLowerCase() === 'active' || houseData?.data.house_status.toLowerCase() === 'inactive' ? 'deactivate as admin' : 'activate'}
                </Button>
              </HouseStatusContainer>
              <Button
                handleClick={onClickTerminateHouse}
              >
                Terminate House
              </Button>
            </HouseContentDetailsContainer>
          </div>
        )}
      </HouseContentContainer>
      <DangerModal
        isShow={showTerminateModal}
        onClose={onCloseTerminateModal}
        title="Terminate House"
        handleSubmit={onSubmitTerminateModal}
        submitText="Delete House"
      >
        Are you sure you want to delete this house?
      </DangerModal>
    </MainContainer>
  );
}

export default House;
