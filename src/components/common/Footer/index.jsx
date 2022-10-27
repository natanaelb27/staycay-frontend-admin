import React from 'react';

import {
  FooterContainer,
  FooterTitle,
  MainContentContainer,
  ContentContainer,
  Content,
  SpanTitle,
  SpanDetail,
  CopyrightContent,
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>
        Staycay: Anywhere, Anytime
      </FooterTitle>
      <MainContentContainer>
        <ContentContainer>
          <SpanTitle>
            Our Contact
          </SpanTitle>
          <Content>
            <div>
              <SpanDetail>
                Staycay
              </SpanDetail>
              <SpanDetail>Pacific Century Place Tower</SpanDetail>
              <SpanDetail>Jakarta, Indonesia</SpanDetail>
            </div>
            <div>
              <SpanDetail>(123) 456-789 - 1255-12584</SpanDetail>
              <SpanDetail>staycay@staycay.com</SpanDetail>
            </div>
          </Content>
        </ContentContainer>
        <ContentContainer>
          <SpanTitle>Quick Links</SpanTitle>
          <Content>
            <SpanDetail>Latest Events</SpanDetail>
            <SpanDetail>Terms and conditions</SpanDetail>
            <SpanDetail>Privacy policy</SpanDetail>
            <SpanDetail>Career</SpanDetail>
            <SpanDetail>Contact us</SpanDetail>
          </Content>
        </ContentContainer>

        <ContentContainer>
          <SpanTitle>Latest Posts</SpanTitle>
          <Content>
            <SpanDetail>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</SpanDetail>
            <SpanDetail>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</SpanDetail>
            <SpanDetail>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SpanDetail>
          </Content>
        </ContentContainer>

        <ContentContainer>
          <SpanTitle>Recent News</SpanTitle>
          <Content>
            <SpanDetail>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</SpanDetail>
            <SpanDetail>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</SpanDetail>
            <SpanDetail>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SpanDetail>
          </Content>
        </ContentContainer>
      </MainContentContainer>

      <CopyrightContent>
        <SpanDetail>© Staycay, Inc.</SpanDetail>
      </CopyrightContent>
    </FooterContainer>
  );
}

export default Footer;
