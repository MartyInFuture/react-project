import styled from 'styled-components';

export const SprintStyled = styled.div`
/* .main {
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0 40px 0 0;
    min-height: 600px;

    @media screen and (max-width: 1279px) {
      width: 768px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 0 55px 0 0;
  } */


/* пррп */

  article {

    /* width: 100%; */
    /* height: 100%; */
    @media screen and (max-width: 414px) {
      padding: 30px 20px 30px 20px;
      margin-left: auto;
      margin-right: auto;
      max-width: 414px;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      padding: 40px 0 30px 20px;
    }

    @media screen and (min-width: 1280px) {
      padding: 40px 0 40px 70px;
    }

    .headerWrap {
        display: flex;
      margin: 0 0 30px;

      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }

      .contentWrap {
        @media screen and (min-width: 768px) {
          width: 452px;
        }

        @media screen and (min-width: 1280px) {
          width: 400px;
        }

        .titleWrap {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin: 0 0 20px;

          h2 {
            margin-right: 20px;
            font-size: 26px;
            font-weight: 500;
            letter-spacing: 0.04em;
            // добавить троеточие в конце длинных названий
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            @media screen and (max-width: 413px) {
              width: 260px;
              height: 64px;
            }
            @media screen and (min-width: 768px) {
              font-size: 36px;
              width: 330px;
              height: 88px;
            }
            @media screen and (min-width: 1280) {
              height: 85px;
            }
          }
          /* .buttonChange {
            border-radius: 50%;
            cursor: pointer;
            border: none;
            min-width: 20px;
            height: 20px;
            background-color: #a6a6a6;
            background: url(./svg/btnChange.svg) no-repeat;
            transition: all 0.25s linear;
            &:hover,
            &:focus {
              background: url(./svg/btnChangeActive.svg) no-repeat;
              transform: scale(1.2);
            }
          } */
        }

        p {
          margin: 0 0 30px;
          letter-spacing: 0.04em;

          @media screen and (max-width: 413px) {
            font-size: 14px;
          }

          @media screen and (min-width: 768px) {
            line-height: 22px;
          }
        }

        .addWrap {
          display: flex;
          align-items: center;
          font-family: Montserrat;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
          letter-spacing: 0.04em;
          text-align: left;


          .group_add {
            cursor: pointer;
            margin-right: 10px;
            text-decoration: none;
            width: 30px;
            height: 30px;
            font-size: 18px;
            color: #181C27;
            background-color: transparent;

          }
          span {
            line-height: 16px;
            letter-spacing: 0.04em;
            color: $text-dark;
            border-bottom: 1px solid #181c27;
            cursor: pointer;
          }
        }
      }

      // div
      .createSprintWrap {
        @media screen and (min-width: 768px) and (max-width: 1279px) {
          position: absolute;
          right: 0px;
        }

        @media screen and (min-width: 1280px) {
          display: flex;
          align-items: center;
          padding-right: 34px;
          height: 52px;
        }

        // Circle with plus ("button")
        .CreateNewSprint {
          cursor: pointer;
          width: 44px;
          height: 44px;
          border-radius: 25px;

          transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
          &:focus,
          &:hover {
            outline: none;
            box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);
            transform: scale(1.15);
          }
          @media screen and (min-width: 1280px) {
            margin-right: 16px;
          }
        }
      }
    }
  }
}

// Circle with plus ("button" Fixed)
.CreateNewSprintFixed {
  position: fixed;
  right: 10px;
  bottom: 60px;
  cursor: pointer;
  z-index: 2;
  width: 44px;
  height: 44px;
  border-radius: 25px;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);
    transform: scale(1.15);
  }
}

.inputChangeTitle {
  display: inline-block;
  border: none;
  outline: none;
  box-shadow: 2px 4px 8px rgba(0, 5, 97, 0.1);
  /* border-radius: 5px; */
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-align: center;
  padding: 5px;

  @media screen and (max-width: 413px) {
    width: 120px;
    height: 32px;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.04em;
    text-align: left;

  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 166px;
    height: 44px;
    
  }
  @media screen and (min-width: 1280px) {
    margin-right: 40px;
    width: 166px;
    height: 44px;
  }
}

.changeTitleForm {
  display: none;
}

.changeTitleFormActive {
  display: flex;
  align-items: center;
}

/* .buttonSave {
  border-radius: 50%;
  cursor: pointer;
  border: none;
  width: 25px;
  height: 25px;
  background: center url(./svg/saver.svg) no-repeat;
  background-size: 18px;
  &:hover,
  &:focus {
    background: center url(./svg/saverActive.svg) no-repeat;
    background-size: 18px;
  }
} */

.sButton {
  background-color: $main-orange;
  box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);
  transition: all 300ms ease;
  padding: 11px 44px;
  border: none;
  border-radius: 25px;
  font-size: 12px;
  outline: none;
  &:hover {
    color: #ff6b08;
    font-weight: 800;
    box-shadow: 0px 4px 10px 4px rgba(255, 107, 8, 0.3);
    outline: none;
  }
/* } */
/* dfdfdfd */
`;
