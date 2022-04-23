import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigationbar from "../NavigationBar/Navigationbar";

const BankPay = () => {
  return (
    <div>
      <Navigationbar />
      <Container className="mt-5 mb-5">
          <h3 className="mb-5">এখানের যে কোন একটি একাউন্ট এ টাকা দিতে পারবেন এবং টাকা দেওয়ার আগে এই  <span className="text-danger">01760254672</span> নাম্বারে কল করে সিউর হয়ে নিবেন, Thanks</h3>
        <Row>
          <Col>
            <Card className="text-start wrap p-2">
              <Card.Text>
                <p>Name: MS SAKIB TRADERS</p>
                <p>A/C:- 20507770100064040 </p>
                <p>Islami Bank Ltd. Branch,Agent bank</p>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card className="text-start wrap p-2">
                <Card.Text>
                  <p>Name:M/S SAKIL TRADERS </p>
                  <p>A/C:- 20507770104435813 </p>
                  <p>Islami Bank Ltd. Branch,Agent bank</p>
                </Card.Text>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card className="text-start wrap p-2">
                <Card.Text>
                  <p>Name: M/S SAKIB TRADERS</p>
                  <p>A/C:- 8888204961974001 </p>
                  <p>NAGARKANDA BRANCH, Brac Bank ltd.</p>
                </Card.Text>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card className="text-start wrap p-2">
                <Card.Text>
                  <p>Name: MD MURSALIN SAKIB</p>
                  <p>A/C:- 1891580014892 </p>
                  <p>DBBL CORE BANKING FARIDPUR BRANCH</p>
                </Card.Text>
              </Card>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Col>
              <Card>
                <Card className="text-start wrap p-2">
                  <Card.Text>
                    <p>Name: MD MURSALIN SAKIB</p>
                    <p>A/C:- 2303319904001 </p>
                    <p>FARIDPUR BRANCH. CITY BANK</p>
                  </Card.Text>
                </Card>
              </Card>
            </Col>
          </Col>
          <Col>
            <Col>
              <Card>
                <Card className="text-start wrap p-2">
                  <Card.Text>
                    <p>Name: MD SHARIFUL ISLAM</p>
                    <p>A/C:- 1591510140471 </p>
                    <p>Eastern Bank Ltd Faridpur branch,Faridpur district</p>
                  </Card.Text>
                </Card>
              </Card>
            </Col>
          </Col>
          <Col>
            <Col>
              <Card>
                <Card className="text-start wrap p-2">
                  <Card.Text>
                    <p>Name: KHAN INT. TRADE</p>
                    <p>A/C:- 0829-0210000666 </p>
                    <p>Krishi Bank, Purapara,Faridpur dist</p>
                  </Card.Text>
                </Card>
              </Card>
            </Col>
          </Col>
          <Col>
            <Col>
              <Card>
                <Card className="text-start wrap p-2">
                  <Card.Text>
                    <p>Name: MS SAKIB TRADERS</p>
                    <p>A/C:- Soon </p>
                    <p>Islami Bank Ltd. Branch,Agent bank</p>
                  </Card.Text>
                </Card>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BankPay;
