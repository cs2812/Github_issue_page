import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Issue_svg from '../SVG/Issue_svg';
import Issue from './Issue';
import { FaCaretDown } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import './Pagination.css'

const GithubIssue = ({ data, totalIssue }) => {
 

  return (
    <Box borderWidth="1px" borderRadius="md">
      {/* <--------Head Div------> */}
      <Flex
        padding={4}
        borderBottomWidth={'1px'}
        justifyContent={'space-between'}
        background={"#f6f8fa"}
      >
        <Flex gap="12px">
          <Flex
            alignItems={'center'}
            gap="5px"
            fontWeight={'500'}
            fontSize={'md'}
          >
            <Text>
              <Issue_svg />
            </Text>
            <Text>{totalIssue}</Text>
            <Text>Open</Text>
          </Flex>
          <Flex
            _hover={{ color: 'black' }}
            cursor={'pointer'}
            alignItems={'center'}
            fontSize={'sm'}
            gap="4px"
            color={'gray'}
          >
            <Text mt="4px">
              <FiCheck size={"17px"}/>
            </Text>
            <Text>{'11,295'}</Text>
            <Text>Closed</Text>
          </Flex>
        </Flex>
        <Flex id='filter' color="gray" fontSize={'sm'} gap="25px" >
          <Flex _hover={{color:"black"}} cursor={"pointer"} alignItems={"center"}><span>Author</span> <span style={{marginTop:"5px"}}><FaCaretDown size={"12px"}/></span></Flex>
          <Flex _hover={{color:"black"}} cursor={"pointer"} alignItems={"center"}><span>Label</span> <span style={{marginTop:"5px"}}><FaCaretDown size={"12px"}/></span></Flex>
          <Flex _hover={{color:"black"}} cursor={"pointer"} alignItems={"center"}><span>Projects</span> <span style={{marginTop:"5px"}}><FaCaretDown size={"12px"}/></span></Flex>
          <Flex _hover={{color:"black"}} cursor={"pointer"} alignItems={"center"}><span>Milestones</span> <span style={{marginTop:"5px"}}><FaCaretDown size={"12px"}/></span></Flex>
          <Flex _hover={{color:"black"}} cursor={"pointer"} alignItems={"center"}><span>Assignee</span> <span style={{marginTop:"5px"}}><FaCaretDown size={"12px"}/></span></Flex>
          <Flex _hover={{color:"black"}} cursor={"pointer"} alignItems={"center"}><span>Sort</span> <span style={{marginTop:"5px"}}><FaCaretDown size={"12px"}/></span></Flex>
        </Flex>
      </Flex>

      {/* <--------Issues Div------> */}
      <Box>
        {data &&
          data.map((ele, i) => {
            return <Issue data={ele} key={i} />;
          })}
      </Box>
    </Box>
  );
};

export default GithubIssue;
