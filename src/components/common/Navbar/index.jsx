/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faUser, faSearch, faFilter, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
// import { faBars, faUser, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
import moment from 'moment';

import {
  Container,
  DropdownIcon,
  InputSpan,
  Nav,
  Logo,
  LogoLink,
  DropDownMenu,
  NavMenu,
  NavMenuList,
  NavMenuLink,
  FilterContainer,
  // FilterIcon,
  FilterSpan,
  Icon,
  DropdownContainer,
  MainSearchContainer,
  MainContentSearchContainer,
  SearchFooterContainer,
  SearchContainer,
  ClearFilterContainer,
  ClearFilterContentContainer,
  ContentSearchContainer,
  ButtonSearchContainer,
} from './style';
import Select from '../Select';
import Label from '../Label';
import Input from '../Input';
import { useGetCityQuery, useGetUserProfileQuery } from '../../../store/slices/apiSlice';
import {
  setFilterHouse,
} from '../../../store/slices/filterHouseSlice';

function Navbar() {
  const {
    filterHouseName, filterCity, filterCheckInDate, filterCheckOutDate,
  } = useSelector((state) => state.FilterHouse);

  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const [inputFilter, setInputFilter] = useState({
    house: filterHouseName,
    city: filterCity,
    checkInDate: filterCheckInDate,
    checkOutDate: filterCheckOutDate,
  });

  const [searchMenu, setSearchMenu] = useState(false);

  const formatDate = 'YYYY-MM-DD';

  const today = moment().format(formatDate);

  const dispatch = useDispatch();

  const {
    data: cityData,
    error: cityError,
    isLoading: cityLoading,
  } = useGetCityQuery();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    setOpenMenu(!openMenu);
    localStorage.clear();
  };

  const handleInputChange = (e) => {
    setInputFilter({ ...inputFilter, [e.target.name]: e.target.value });
  };

  const handleClearInput = () => {
    setInputFilter({
      house: '', city: 0, checkInDate: '', checkOutDate: '',
    });
  };

  const handleSearchMenu = () => {
    setSearchMenu(!searchMenu);
  };

  const handleSearchMenuOut = () => {
    setSearchMenu(false);
  };

  const handleClickSearch = (e) => {
    e.preventDefault();

    if (inputFilter.checkInDate && !inputFilter.checkOutDate) {
      inputFilter.checkOutDate = moment(inputFilter.checkInDate)
        .add(1, 'days').format(formatDate);
    }

    if (inputFilter.checkOutDate && !inputFilter.checkInDate) {
      inputFilter.checkInDate = moment(inputFilter.checkOutDate)
        .subtract(1, 'days').format(formatDate);
    }

    dispatch(setFilterHouse({
      houseName: inputFilter.house,
      city: parseInt(inputFilter.city, 10),
      checkInDate: inputFilter.checkInDate,
      checkOutDate: inputFilter.checkOutDate,
    }));

    navigate('/');
  };

  const useOutsideAlerterDropdownMenu = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenMenu(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperDropdownMenuRef = useRef(null);
  useOutsideAlerterDropdownMenu(wrapperDropdownMenuRef);

  const useOutsideAlerterSearchMenu = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchMenu(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperSearchMenuRef = useRef(null);
  useOutsideAlerterSearchMenu(wrapperSearchMenuRef);

  const renderCitiesDropdown = () => cityData?.data.city.map((item) => (
    <option key={item.city_id} value={item.city_id}>{item.city_name}</option>
  ));

  return (
    <Nav ref={wrapperSearchMenuRef}>
      <Container>
        <LogoLink onClick={handleSearchMenuOut} to="/" replace>
          <Logo src={require('../../../assets/staycay-logo-name.png')} alt="staycay-logo" />
        </LogoLink>
        {window.location.pathname === '/' ? (
          <FilterContainer type="button" onClick={handleSearchMenu}>
            <Icon icon={faFilter} />
            <FilterSpan>Filter</FilterSpan>
          </FilterContainer>
        ) : null}

        {
          localStorage.getItem('admin') ? (
            <DropDownMenu ref={wrapperDropdownMenuRef}>
              <DropdownContainer>
                <DropdownIcon onClick={handleOpenMenu}>
                  <FontAwesomeIcon icon={faBars} />
                  <FontAwesomeIcon icon={faUser} />
                </DropdownIcon>
              </DropdownContainer>
              <NavMenu open={openMenu} onClick={handleSearchMenuOut}>
                <NavMenuList>
                  {
                localStorage.getItem('admin') ? (
                  <NavMenuLink to="/" onClick={handleOpenMenu}>
                    Home
                  </NavMenuLink>
                )
                  : null
              }
                  {
                localStorage.getItem('admin') ? (
                  <NavMenuLink to="/pickup" onClick={handleOpenMenu}>
                    Pickup
                  </NavMenuLink>
                )
                  : null
              }
                  {
                !localStorage.getItem('admin') ? (
                  <NavMenuLink to="/login" onClick={handleOpenMenu}>
                    Login
                  </NavMenuLink>
                )
                  : null
              }
                  {
                localStorage.getItem('admin') ? (
                  <NavMenuLink to="/login" onClick={handleLogout}>
                    Logout
                  </NavMenuLink>
                )
                  : null
              }
                </NavMenuList>
              </NavMenu>
            </DropDownMenu>
          ) : null
        }
      </Container>

      {searchMenu
        ? (
          <MainSearchContainer>
            <MainContentSearchContainer>
              <ContentSearchContainer>
                <Label labelFor="city">Choose City</Label>
                <Select selectName="city" selectID="city" handleChange={handleInputChange} selectValue={inputFilter.city}>
                  <option value="0">All</option>
                  {!cityLoading && !cityError && (renderCitiesDropdown())}
                </Select>
              </ContentSearchContainer>
              <ContentSearchContainer>
                <Label labelFor="houseName">House Name</Label>
                <Input inputType="text" inputID="houseName" handleChange={handleInputChange} inputName="house" inputValue={inputFilter.house} inputPlaceholder="Search house name" />
              </ContentSearchContainer>
              <ContentSearchContainer>
                <Label labelFor="checkInDate">Check In</Label>
                <Input
                  inputType="date"
                  inputID="checkInDate"
                  handleChange={handleInputChange}
                  inputName="checkInDate"
                  inputValue={inputFilter.checkInDate}
                  inputMin={today}
                  inputMax={inputFilter.checkOutDate ? moment(inputFilter.checkOutDate)
                    .subtract(1, 'days').format(formatDate) : null}
                />
              </ContentSearchContainer>
              <ContentSearchContainer>
                <Label labelFor="checkOutDate">Check Out</Label>
                <Input inputType="date" inputID="checkOutDate" handleChange={handleInputChange} inputName="checkOutDate" inputValue={inputFilter.checkOutDate} inputMin={inputFilter.checkInDate ? moment(inputFilter.checkInDate).add(1, 'days').format(formatDate) : today} />
              </ContentSearchContainer>
            </MainContentSearchContainer>
            <SearchFooterContainer>
              <ClearFilterContainer>
                <ClearFilterContentContainer onClick={handleClearInput}>
                  <InputSpan>Clear Filter</InputSpan>
                  <Icon icon={faTrashAlt} />
                </ClearFilterContentContainer>
              </ClearFilterContainer>
              <ButtonSearchContainer>
                <SearchContainer onClick={handleClickSearch}>
                  <InputSpan>Search</InputSpan>
                  <Icon icon={faSearch} />
                </SearchContainer>
              </ButtonSearchContainer>
            </SearchFooterContainer>
          </MainSearchContainer>
        )

        : null}
    </Nav>
  );
}

export default Navbar;
