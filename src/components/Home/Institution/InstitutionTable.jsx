import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { visuallyHidden } from '@mui/utils';

function createData(id, name, type, status, contact) {
  return { id, name, type, status, contact };
}

const rows = [
  createData(1, 'Springfield Institute of Technology', 'University', 'Active', '+1-217-555-1234, contact@springfieldtech.edu'),
  createData(2, 'Green Valley High School', 'School', 'Inactive', '+1-312-555-5678, info@greenvalleyhs.edu'),
  createData(3, 'Riverside Community College', 'College', 'Active', '+1-213-555-9876, admissions@riversidecc.edu'),
  createData(4, 'Horizon University', 'University', 'Inactive', '+1-415-555-1234, info@horizonuniv.edu'),
  createData(5, 'Westside Academy', 'School', 'Active', '+1-718-555-8765, admin@westsideacademy.edu'),
  createData(6, 'Lakeshore College', 'College', 'Active', '+1-510-555-6543, contact@lakeshore.edu'),
  createData(7, 'Silver Oak International School', 'School', 'Inactive', '+1-619-555-4321, info@silveroak.edu'),
  createData(8, 'Blue Ridge University', 'University', 'Active', '+1-858-555-5678, admissions@blueridgeuniv.edu'),
  createData(9, 'Maplewood Academy', 'School', 'Inactive', '+1-702-555-8765, contact@maplewoodacademy.edu'),
  createData(10, 'Sunnydale College', 'College', 'Active', '+1-212-555-6543, info@sunnydalecollege.edu'),
  createData(11, 'Oakridge International School', 'School', 'Active', '+1-323-555-4321, admin@oakridge.edu'),
  createData(12, 'Hillcrest University', 'University', 'Inactive', '+1-714-555-5678, contact@hillcrestuniv.edu'),
  createData(13, 'Greenwood High', 'School', 'Active', '+1-415-555-8765, info@greenwoodhigh.edu'),
  createData(14, 'Redwood College', 'College', 'Inactive', '+1-925-555-6543, admissions@redwood.edu'),
  createData(15, 'Golden Valley School', 'School', 'Active', '+1-510-555-4321, contact@goldenvalley.edu'),
  createData(16, 'Evergreen University', 'University', 'Active', '+1-619-555-5678, admin@evergreen.edu'),
  createData(17, 'Elmwood Academy', 'School', 'Inactive', '+1-702-555-8765, info@elmwoodacademy.edu'),
  createData(18, 'Seaside College', 'College', 'Active', '+1-213-555-6543, contact@seaside.edu'),
  createData(19, 'Pinecrest University', 'University', 'Inactive', '+1-212-555-4321, admissions@pinecrestuniv.edu'),
  createData(20, 'Lakewood High School', 'School', 'Active', '+1-312-555-5678, info@lakewoodhigh.edu'),
  createData(21, 'Brookfield College', 'College', 'Active', '+1-415-555-8765, admin@brookfield.edu'),
  createData(22, 'Valley Forge University', 'University', 'Inactive', '+1-718-555-6543, contact@valleyforge.edu'),
  createData(23, 'Mountainview Academy', 'School', 'Active', '+1-510-555-4321, info@mountainviewacademy.edu'),
  createData(24, 'Ridgefield College', 'College', 'Inactive', '+1-213-555-5678, contact@ridgefield.edu'),
  createData(25, 'Silver Valley University', 'University', 'Active', '+1-858-555-8765, admissions@silvervalley.edu'),
  createData(26, 'Northwood Academy', 'School', 'Inactive', '+1-323-555-6543, info@northwoodacademy.edu'),
  createData(27, 'Clearwater College', 'College', 'Active', '+1-714-555-4321, contact@clearwater.edu'),
  createData(28, 'Maple Grove University', 'University', 'Inactive', '+1-925-555-5678, info@maplegrove.edu'),
  createData(29, 'Riverview School', 'School', 'Active', '+1-510-555-8765, admin@riverview.edu'),
  createData(30, 'Southridge College', 'College', 'Active', '+1-619-555-6543, contact@southridge.edu'),
];

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Institution Name' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Institution Type' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'contact', numeric: false, disablePadding: false, label: 'Contact Information' },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all institutions',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          component="div"
          color="primary"
        >
          Institutions
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredRows, setFilteredRows] = useState(rows);
  const [statusFilter, setStatusFilter] = useState('All');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredRows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = rows.filter(row =>
      row.name.toLowerCase().includes(searchTerm) ||
      row.type.toLowerCase().includes(searchTerm) ||
      row.status.toLowerCase().includes(searchTerm) ||
      row.contact.toLowerCase().includes(searchTerm)
    );
    setFilteredRows(filteredData);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TextField
        variant="outlined"
        label="Search"
        onChange={handleFilter}
        sx={{ marginBottom: '1rem', width: '100%', backgroundColor: "white" }}
      />
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filteredRows.length}
            />
            <TableBody>
              {stableSort(filteredRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.contact}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={11} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
