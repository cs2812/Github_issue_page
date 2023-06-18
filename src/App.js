import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getAllData } from './Api/api';
import GithubIssue from './components/GithubIssue';
import { GoLightBulb } from 'react-icons/go';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const per_page=15

  const handlePage = num => {
    setCurrentPage(num);
  };
  useEffect(() => {
    getAllData(currentPage,per_page).then(res => {
      setData(res);
    });
  }, [currentPage]);
  return (
    <Box p={4} pl="4rem" pr="4rem"  >
      {/* <-----------Issues UI-----------> */}
      <GithubIssue data={data.issues} totalIssue={data.open_issues} />

      {/* <---------Pagination--------> */}
      <Box p="1.5rem">
        <Flex justifyContent={'center'}>
          <Pagination
            count={data.open_issues}
            pageNum={currentPage}
            handlePage={handlePage}
            per_page={per_page}
          />
        </Flex>

        {/* <------ Footer Text------> */}
        <Flex mt="10px" gap="5px" align={'center'} justifyContent={'center'}>
          <Text>
            <GoLightBulb color="gray" />{' '}
          </Text>
          <Text>
            <span style={{ fontWeight: '500', color: 'black' }}>ProTip!</span>{' '}
            Adding{' '}
            <a href="#" style={{ color: 'blue' }}>
              no:label
            </a>{' '}
            will show everything without a label.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
