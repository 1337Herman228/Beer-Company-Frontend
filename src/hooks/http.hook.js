import React, {useState,useCallback} from 'react';

export const useHttp= () =>{

	const requestJson = useCallback( 
        async(url, method = 'GET', body = null, headers={'Content-Type': 'application/json'}) =>{
        // async(url, method = 'GET', body = null) =>{
		try{
			const response = await fetch(url, {method,body})
			if(!response.ok){throw new Error('Could not fetch ' + url + 'status ' + response.status)}
            const data = await response.json()
			return data

		}catch(e){throw e}

	},[])

    const requestPromise = useCallback( 
		async(url, method = 'GET', body = null, headers={'Content-Type': 'application/json'}) =>{
		try{
			const response = await fetch(url, {method,body})
			if(!response.ok){throw new Error('Could not fetch ' + url + 'status ' + response.status)}
			return response

		}catch(e){throw e}

	},[])

	return {requestJson, requestPromise}
}