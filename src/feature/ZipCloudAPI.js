import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";

export default function ZipCloudAPI() {
  const [posts, setPosts] = useState([]);
  const [zipcode, setZipcode] = useState(["5203201"]);
  const [flag, setFlag] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data);
    setZipcode(data.zipcode);
    setFlag(true);
  };

  useEffect(() => {
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, [zipcode]);
  return (
    <Box sx={{ m: 2 }}>
      <TextField
        id="zipcode"
        label="郵便番号"
        variant="outlined"
        type="text"
        {...register("zipcode")}
      />
      <Button
        sx={{ mt: 2, ml: 1 }}
        onClick={handleSubmit(onSubmit)}
        variant="contained"
      >
        住所を検索
      </Button>
      {flag ? (
        <div>
          <p>{posts.results[0].address1}</p>
          <p>{posts.results[0].address2}</p>
          <p>{posts.results[0].address3}</p>
        </div>
      ) : (
        <div>
          <p>郵便番号を入力してください</p>
        </div>
      )}

      {/* <p>都道府県：{posts.results[0].address1}</p>
      <p>市：{posts.results[0].address2}</p>
      <p>{posts.results[0].address3}</p> */}
    </Box>
  );
}
