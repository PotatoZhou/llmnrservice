import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

const detailframe = () => {
    const [accountRecord, setAccountRecord] = useState<{
        accountId: string, email: string,
   }>()
    const [detailData, setDetailData] = useState<string[]>(['1', '2', '3'])
    useEffect(() => {
        // await fetch(accountData)
        console.log('fetch')
        setAccountRecord({accountId: 'what', email: 'what',});
        setDetailData(detailData);
    }, [])
    return (
    <>
        {detailData ? (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#000000', height: '100%' }}>
            </SafeAreaView>
        </>
        ) : (
        <>
            <SafeAreaView>
                <view className="flex  justify-end mt-[18px] group/edit invisible group-hover/item:visible">
                    <button></button>
                </view>
            </SafeAreaView>
        </>
        )}
    </>
    )
}


export default detailframe;