import { RxDotsVertical } from 'react-icons/rx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        borderRadius: 'xl',
        backgroundColor: 'white',
    },
    header: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '3px',
        textAlign: 'start',
    },
    table: {
        minWidth: '100%',
        textAlign: 'end',
    },
    tableHeader: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        padding: '4px 16px',
    },
    tableCell: {
        color: 'gray.600',
        fontSize: '0.75rem',
        fontWeight: 'normal',
        padding: '8px',
    },
});

export default function DashTable({
    mainTitle,
    headerNames,
    tableData,
    rowStyles,
}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.root}>
            <div className={classes.header}>
                <Typography variant="subtitle1" className={classes.mainTitle}>
                    {mainTitle}
                </Typography>
                <RxDotsVertical className="cursor-pointer text-xl" />
            </div>
            <hr className="border-b-2 mx-3 mb-1" />
            <div className="overflow-x-auto overflow-y-scroll 2xl:overflow-y-hidden 2xl:overflow-x-hidden max-h-[calc(120vh-6rem)]">
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {headerNames?.map((headerName, index) => (
                                <TableCell
                                    key={index}
                                    className={classes.tableHeader}
                                >
                                    {headerName}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData?.map((rowData, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                style={rowStyles[rowIndex]}
                                className="border-t"
                            >
                                {rowData?.map((cellData, cellIndex) => (
                                    <TableCell
                                        key={cellIndex}
                                        className={classes.tableCell}
                                    >
                                        {cellData}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </TableContainer>
    );
}
