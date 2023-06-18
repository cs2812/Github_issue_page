import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import OpenIssue from '../SVG/OpenIssue';
import { calcTimeAgo } from '../Utils/helperFunction';
import { getIssueComments } from '../Api/api';

const Issue = ({ data }) => {
  const [comment, setComment] = useState(0);
  const getComment = async url => {
    getIssueComments(url).then(res => {
      if (res.length) {
        setComment(res.length);
      }
    });
  };
  const hedlerHover=(e)=>{
    console.log(e)

  }
  
  useEffect(() => {
    getComment(data.comments_url);
  }, []);

  return (
    <>
      <Flex
        justifyContent={'space-between'}
        borderBottomWidth={'1px'}
        p={'0.5rem'}
        pl={'1rem'}
        _hover={{ background: '#f6f8fa' }}
        onMouseEnter={hedlerHover}
      >
        {/* <--------Single Issue-------> */}
        <Flex gap="7px">
          <Box mt="5px">
            <OpenIssue />
          </Box>
          <Box>
            <Text
              _hover={{ color: 'blue' }}
              cursor={'pointer'}
              fontWeight={'500'}
            >
              {data.title}
            </Text>
            <Text fontSize={'12px'} color={'gray'}>
              {`#${data.number}`} opened {calcTimeAgo(data.created_at)} by
              <Text
                cursor={'pointer'}
                _hover={{ color: 'blue' }}
                as="span"
                ml="3px"
              >
                {data.user.login}
              </Text>
            </Text>
          </Box>
        </Flex>

        {/* <--------Comment Icon-------> */}
        {comment ? (
          <Flex gap={'10px'}>
            <Text mt={'7px'} as="span">
              <FaRegCommentAlt size={'14px'} />
            </Text>
            <Text fontSize={'12px'} mt="1" as="span">
              {comment}
            </Text>
          </Flex>
        ) : (
          ''
        )}
      </Flex>
    </>
  );
};

export default Issue;
