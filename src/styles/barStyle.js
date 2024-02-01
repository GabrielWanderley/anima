import styled from "styled-components"

export const BarStyle = styled.div`
 padding-top: 30px;
 background-color: #120D31 ;
 border-bottom: 2px solid black;
 min-height: 150px;
 a{
        
        text-decoration: none;
        color: white;
    }

 .google{

    float: right;
    margin-right: 30px;
 }
 .logo{
    align-items: start;
    margin-left: 30px;
    float: left;
    color: white;
    span{
        color: red;
    }
 }

 .user{
    justify-content: end;
    text-align: end;
    align-items: end;
    color: white;
    img{
        float: right;
        margin-right: 30px;
        border-radius: 10px;
        border: 2px solid black;
    }
    h1{
        font-size: 30px;
        margin-right: 170px;
    }
    .button {
    
  float: right;
  display: block;
  position: relative;
  width: 56px;
  height: 56px;
  margin: 0;
  overflow: hidden;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  margin-right: 35px;
}

.button:before,
.button:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 7px;
}

.button:before {
  border: 4px solid #f0eeef;
  transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
    transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
}

.button:after {
  border: 4px solid #96daf0;
  transform: scale(1.3);
  transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
}

.button:hover:before,
.button:focus:before {
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.button:hover:after,
.button:focus:after {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
    transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
}

.button-box {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}

.button-elem {
  display: block;
  width: 20px;
  height: 20px;
  margin: 17px 18px 0 18px;
  transform: rotate(180deg);
  fill: #f0eeef;
}

.button:hover .button-box,
.button:focus .button-box {
  transition: 0.4s;
  transform: translateX(-56px);
}

 }

`