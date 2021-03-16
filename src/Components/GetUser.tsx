import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    marginRight: {
        marginRight: 10
    }
});
export interface IValues {
    id: number,
    name: string,
    rollno: string,
    class: string,
    address: string,
}

const GetUser = () => {

    const [student, setStudent] = useState<IValues[]>([]);
    /*  const [StudentList, setStudentList] = useState<IValues[]>([]); */

    useEffect(() => {
        (async () => {
            const response = await axios.get<IValues[]>(`https://localhost:44340/api/Students/GetStudentDetails`);
            setStudent(response.data);
            console.log(response.data);
        })()
    }, [])


    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl" >
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Rollno</TableCell>
                                <TableCell align="left">Class</TableCell>
                                <TableCell align="left">Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {student.map((U) => {
                                return (
                                    <TableRow key={U.id}>
                                        <TableCell align="left">{U.id}</TableCell>
                                        <TableCell align="left">{U.name}</TableCell>
                                        <TableCell align="left">{U.rollno}</TableCell>
                                        <TableCell align="left">{U.class}</TableCell>
                                        <TableCell align="left">{U.address}</TableCell>
                                    </TableRow>
                                )
                            })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
        </>
    );

}
export default GetUser
