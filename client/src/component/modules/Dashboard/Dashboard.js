import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Outlet, useNavigate } from "react-router-dom"
import SidebarItem from "./SidebarItem";
import './style.css'
function Dashboard() {
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState(() => {
        const path = window.location.pathname;
        const pathArr = path.split('/');
        return pathArr[2];
    });
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(()=>{
        const path = window.location.pathname;
        const pathArr = path.split('/');
        setCurrentPath(pathArr[2]);
    },[window.location.pathname])

    return (
        <Container fluid>
            <Row>
                <Col xs = {3} className = "col_3">
                    <div className="box d-flex flex-column align-items-center">
                        <div className="col_3_header">
                            <h4>Dashboard</h4>
                        </div>
                        <SidebarItem
                        title = "Upload"
                        onClick={() => navigate('/dashboard/upload')}
                        />
                    </div>
                </Col>
                <Col xs = {9}>
                    <div className="box">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard