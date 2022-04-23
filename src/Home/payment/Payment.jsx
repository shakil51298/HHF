import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigationbar from "../NavigationBar/Navigationbar";
import './Payment.scss'

const bksCardClicked = () => {
  window.location.replace("https://forms.gle/ASWptcnpQ9QNz9SL6");
};
const roketCardClicked = () => {
  window.location.replace("https://forms.gle/tkmZbTinVVBXV4EQ7");
};

const NagadClicked = () => {
  window.location.replace("https://forms.gle/RfKrA7CcCd7bP93h9");
};
const Payment = () => {
  let naviGate = useNavigate();

  const BankClicked = () => {
    naviGate("/bankPay");

  };

  return (
    <div>
      <Navigationbar />
      <div className="desc mt-5 mb-5">
        <p className="h3">আপনি কোন অনলাইন পেমেন্ট মেথড দিয়ে টাকা দিতে চান?</p>
        <h4>দয়া করে সেটি সিলেক্ট করুন।</h4>
      </div>

      <Container className="payment mt-5 mb-5">
        <Row>
          <Col>
            <Card onClick={bksCardClicked} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://lh3.googleusercontent.com/KUfyc4wbGAS0bmeKRhpAqQpXQrE0d3sta5ZlPp8Yu8rwbEdIS3PZZIaPDxhPFJQ5AgMLgaxlAA8aSzuXG_aQexp8E611FwQlqe00nCkHv--xRPtiTKxf2SKSSJIgWP2KNQL6FaWiQH7RPnVNvMSU6toKO5sTsIOVPEYCKSXfKih0EOOo3k79TqAIMbQ-2P4FChRLqS7m6yaO5lxx1sE7p5O9jWWn3kskfsuWEecmzeFDS7xu-MKyXO--kSXyye1hmtUunXSn23-gUc60r2eZXLJFWC-WM98OlaFS-QwadO6CC_pQjB6Fo37GjNZqeMsxnfkt7bMLaoQPnpT-xLmhoR8Mj8Lg-Tt6QQfA60JKYsDm8Y0JOgCr4Tuc37EYj4w9AaTQrBrnUCOZebJxt3i_tvWBbPXG2uWvh-27n25rwxR4VuY8p_45BJo-XwvuEA-IwSYz5ncP3FDcE0bgMIcs6gONrv5DoVjLPMtRtokQcCCnPjo2GWjGaq7nQ8mvoTBxJIwOC9avFXemKKJrZAmQ648aFr6l68Iocpgz4Q7sKI5XRx6W_fP8fFXFfMzd2Pz0cXbPWD_qE3imYTYDtTIh6tMdz5uuvdMHXNJPDlmfsGf2-xVwLT5eW-jgCKUDOc_KL5reK3QOLePw97SdkXgbfIuuLsRU4aSjkwrdG615UIVoz7FjEMantrjzI1r1J8bMy9H8Se04qqpA67tr3ukTWeUFYL5d76FcKFi7qgx_mQ_JO99UeFHfcQx5flI=s512-no?authuser=0"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    বিকাশ
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col>
            <Card onClick={roketCardClicked} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://lh3.googleusercontent.com/295aHKOL63SiuvCIsHgIyi5Gyj5zY6Gsh9rV_ttJhH77YO7_DhrTlfK3KmQwWngw1mxFXzJy8ibnKzx6qBFzklqJ4jYhW0EzH9v6KvWT0ZycaqFe6BShSV5Ci1AjmFrDjKa2MZH4tVkmBXIm3nflopGo2IyWKeDMHcd4M_tqWEoOUcQZxbidkn9FVwWTKVdrBrqPT0SiVyPxdhmR9ZJw-AGc8_ZaapQPdx-0HeX2noh_6mbv6zjiuSDRp1PsA5MHT0YGNnbNyeEhU4410oLw2TAAFi6qBgW3NMOQz0ly5XqBWktIaQET37ZCBAGGPR4QUpoM0kLqxI7DncgP_bh7ZW78CbLsIvSD1fv-TWd_9jF-P7xgGJ1XvNtarbq__GUgG7Q2BwOZtqByQTJ7PwaA92nnJrhf4ogd_VW3RlR4qJymEKcx1ZY-3LLzEfpclOMYedUMQxhNK3pfwpH4cbB1EJsMmoUdXYR0Rmxv19uDZLAtf75lMB9nIsl34SnLTSgaludzAExwFB5WRo1SR7WSYOLLdhwsEjTvhik9ieuGJxbqe410T6ZfBzWOKuSMZxeqJCAGIYeSP9gtMqlg3rZtfeIZsxo78QAGS4w8oLGzBhy95q5KxgtsX38hsXviIuaet8pTi_F6AEKdmQLbP520V0gRCK0iXHGQML4J6XqezvbpRUubMeQeYfM50JyQJS4Kogb-F10o3DZkGjjeOdaFZHSbjdDNrmDY_SeeA5Rbiqd98_2doG6dtwLZ7nE=w1200-h630-no?authuser=0"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    রকেট
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col>
            <Card onClick={BankClicked} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://lh3.googleusercontent.com/rzlJ7dofg8zY3QGAM2lFY_8OUvGbjxj04jBrExLJBkTcI1nxdcBzdk1zbTHfP4DuDeYbCOk0W41UcnHlDWHCVjfDUE_1T_FV6TamI6xaIZjb-PpizAopgoOm2NRvBASK-ICPNupInV50oQyjAyP8UwLNzB4zfvJegsCTYIqpC9WW5BsyDsmYknYgYuyjRL-rrMc4bnwjCMbYGBKG4VhQ7dKvYmHJoVOL0bbQjlfbfKeOSb_L0YyL6uK1wVrRIVMBHkyJi7hdRGGIxG1AuvbRxrgDoUX3OLnYG-NsI5l2p0lXHGc8f_07VrBkDKWqQnSvoTSOBLqZw90c0W1T5qtxWVu_Ck354o5zirU2n-uqfOk5XSSr3raKFYYtVgRmWAavoXDJoWBLrZg4qOErAmvGsJfrG_FVbibAMIlx-ZvK8Ms-Vac_dCnChAnpdnKlyEOmZl1scZIIoji8DqlewUaPo2rYr4ULbEL52c8fO86CTWEv3dGyrrhkplFU0WE3q87tewGDTubT9tkoQL-nDRMqLKWqxVUHOGftGZtE9U4Wolm9pjKggNZrdbYocbw7VYFCR6W54MxP-PLTMo4xUj4dfi136VN_p9Sm9e8oZkd7xuO-y_yjV9P6Us-m2tZWH98Dma1oizSlCEnJBFvN_Mc_3asqbZc1rxuXsqVzfxZutmTDbuHLoKRwI66s2e6kWZ03MHaCa6FKywfC1aVuiP20v7ideNntMAOqRYqkE4wLnmFkln55XPZM5gaggz0=w612-h471-no?authuser=0"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ব্যাংক
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col>
            <Card onClick={NagadClicked} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://lh3.googleusercontent.com/O2DJLe8HI_aQbHv6VX_ukUwBS1MbcAc8l9o5jAWy4lxNDZu2vkDntHTZVmcuUyY63APCex_m91M35SrWep2xcM1boNHSxcwQY5HRJSkQlQ1yaz3lvUkDryNsQ_8BxpMGDX1qr9QtcyqUEYib4qLi4Pl5rcITBofcXsvthAoa7ZIdVKOaYAETL3aIxqTjouR-cy8eJsV9Foa1aVvacsD2ACFdo6DNmB_dDnUSGbZuuW9ua7ORJmmbRtJxZv9k6y1Cwiznxk5m1XMmOACIanwWLRNmW8eRNtIiYwc4gAn0RBwsPnUnQnS20RmqY3w526BACicd7DVKL1uFix7ib6XRdvDknoTEXPtUQtRQNMPoFdhxSquYHK-AiU1WBxfKbGuD7m9VdZTBzl9hyU6wOi0195E0PJ7fvPtKS4c_KXUblt_f0NM7PKNJWpYueMlqSr6XH-CjcO4YCut3rWW5CplPlUd05Ysmgse3A3wWrQKSHcoqDY5dyBCHlt7A_2ZCq_YblEQRHuvEJJKPU7f0p8Ccu2Y8oif4Ckd33tC709Q8R2pZyNhzwGlnovoJ4gaUd9VknldtjMVRYIAHqna7_phL-ui5ZYDFePq7NN_vsInbYDuzpcsh7nzd6JdvPS1gVyl9AEGe6k-Gj6EjJd7jmH9YFMRo0zGZ4ImvY2hgIvIna2VhkZbmR3NZ2FrZjb5zRxOscql_eHbvzvP3GP9FNvcU4NrNpT03Vh7qjlLXM5to5Wknm8TSpKJzyTS2fMU=s512-no?authuser=0"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    নগদ
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Payment;
