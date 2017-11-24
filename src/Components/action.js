export default function fetchUser(value){
    return {
       type: 'FETCH_INFO_USER',
        data: value

    }
}

export default function fetchCompany(value){
    return {
        type: 'FETCH_INFO_COMPANY',
        data: value

    }
}