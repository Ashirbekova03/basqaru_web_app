<template>
  <div class="alert-container">
    <div class="alert-content-container">
      <div class="close-button" @click="closeAlert">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_7_2)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.121L17.303 19.425C17.5844 19.7064 17.966 19.8645 18.364 19.8645C18.762 19.8645 19.1436 19.7064 19.425 19.425C19.7064 19.1436 19.8645 18.762 19.8645 18.364C19.8645 17.966 19.7064 17.5844 19.425 17.303L14.12 12L19.424 6.697C19.5633 6.55767 19.6737 6.39227 19.7491 6.21025C19.8244 6.02823 19.8632 5.83315 19.8631 5.63615C19.8631 5.43915 19.8242 5.24409 19.7488 5.0621C19.6734 4.88011 19.5628 4.71477 19.4235 4.5755C19.2842 4.43623 19.1188 4.32577 18.9367 4.25043C18.7547 4.17508 18.5596 4.13633 18.3626 4.13637C18.1656 4.13642 17.9706 4.17527 17.7886 4.2507C17.6066 4.32613 17.4413 4.43667 17.302 4.576L12 9.879L6.697 4.576C6.5587 4.43267 6.39323 4.31832 6.21027 4.23962C6.0273 4.16092 5.83049 4.11945 5.63132 4.11763C5.43215 4.1158 5.23462 4.15366 5.05024 4.229C4.86586 4.30433 4.69833 4.41563 4.55742 4.55641C4.41652 4.69718 4.30506 4.8646 4.22955 5.04891C4.15404 5.23322 4.116 5.43072 4.11763 5.62989C4.11927 5.82906 4.16056 6.02591 4.23908 6.20895C4.31761 6.39199 4.4318 6.55756 4.575 6.696L9.88 12L4.576 17.303C4.29461 17.5844 4.13652 17.966 4.13652 18.364C4.13652 18.762 4.29461 19.1436 4.576 19.425C4.85739 19.7064 5.23905 19.8645 5.637 19.8645C6.03495 19.8645 6.41661 19.7064 6.698 19.425L12 14.12V14.121Z" />
          </g>
          <defs>
            <clipPath id="clip0_7_2">
              <rect width="24" height="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div style="flex: 1; text-align: center;">
        <p class="header">Create category</p>
        <p class="info">Fill out the fields below to add category</p>
        <div class="field-container">
          <p>Category name</p>
          <div class="input-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.4" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 14H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V14ZM4 4H10V9C10 9.26522 9.89464 9.51957 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10H5C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V4Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input placeholder="Category name" type="text" v-model="categoryName">
          </div>
        </div>
        <div class="field-container">
          <p>Limit</p>
          <div class="input-container">
            <svg width="24" height="24" viewBox="0 0 24 24"  opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16C16 14.895 12.866 14 9 14M16 16C16 17.105 12.866 18 9 18C5.134 18 2 17.105 2 16M16 16V20.937C16 22.076 12.866 23 9 23C5.134 23 2 22.077 2 20.937V16M16 16C19.824 16 23 15.013 23 14V4M9 14C5.134 14 2 14.895 2 16M9 14C4.582 14 1 13.013 1 12V7M9 5C4.582 5 1 5.895 1 7M1 7C1 8.105 4.582 9 9 9C9 10.013 12.253 11 16.077 11C19.9 11 23 10.013 23 9M23 4C23 2.895 19.9 2 16.077 2C12.253 2 9.154 2.895 9.154 4M23 4C23 5.105 19.9 6 16.077 6C12.254 6 9.154 5.105 9.154 4M9.154 4V14.166" stroke="black" stroke-width="1.4"/>
            </svg>
            <input placeholder="Limit" v-mask="'$########'" type="text" v-model="amountLimit">
          </div>
        </div>
        <div class="field-container">
          <p>Upload the icon</p>
          <div class="image-container">
            <input type="file" hidden ref="fileInput" @change="handleFileUpload" accept="image/*">
            <svg v-if="imageUrl == null" @click="openFileSelector"  width="24" height="24" viewBox="0 0 24 24" opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3.002C12.53 3.00067 12.03 3 11.5 3C7.022 3 4.782 3 3.391 4.391C2 5.782 2 8.021 2 12.5C2 16.978 2 19.218 3.391 20.609C4.782 22 7.021 22 11.5 22C15.978 22 18.218 22 19.609 20.609C20.947 19.27 20.998 17.147 20.999 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 14.1349C2.62 14.0449 3.244 14.0009 3.872 14.0029C6.524 13.9469 9.111 14.7729 11.172 16.3339C13.082 17.7819 14.425 19.7739 15 21.9999" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 16.896C19.825 16.301 18.609 15.999 17.386 16C15.535 15.993 13.702 16.673 12 18M17 4.5C17.491 3.994 18.8 2 19.5 2M19.5 2C20.2 2 21.509 3.994 22 4.5M19.5 2V10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <img v-else :src="imageUrl" class="icon-image" @click="openFileSelector" />
          </div>
        </div>
        <div class="primary-button" @click="addCategory">Save</div>
      </div>
    </div>
  </div>
</template>

<script>

import utils from "@/utils/utils.js";
import api from "@/service/api.js";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import axios from "axios";

export default {
  name: "v-add-category-alert",
  data() {
    return {
      categoryName: "",
      amountLimit: "",
      imageUrl: null,
      file: null
    }
  },
  methods: {
    closeAlert: function () {
      this.$emit('close')
    },
    closeReload() {
      this.$emit('close', {...true})
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
    },
    openFileSelector() {
      this.$refs.fileInput.click();
    },
    async addCategory() {
      if (!utils.checkIsEmpty(this.imageUrl, this.categoryName, this.amountLimit)) {
        let formData = new FormData();
        formData.append('file', this.file);
        try {
          const response = await axios.post('http://192.168.0.19:8080/api/image/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          this.finallyCreate("http://192.168.0.19:8080/api/" + response.data);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    },
    finallyCreate(fileUrl) {
      api.category.add({
        data: {
          imageUrl: fileUrl,
          name: this.categoryName,
          limit: parseFloat(this.amountLimit.replaceAll("$", "")),
        }
      }).then(() => {
        this.closeReload();
      })
    }
  }
}
</script>

<style scoped>
.header {
  font-size: 22px;
  font-family: Rubik-regular, system-ui;
  font-weight: 600;
  color: black;
}
.info {
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: Rubik-regular, system-ui;
}
.field-container {
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: start;
}
.field-container>p {
  font-size: 15px;
  color: black;
  font-family: Rubik-regular, system-ui;
}
.input-container {
  margin-top: 7px;
  display: flex;
  padding: 10px 10px 10px 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  vertical-align: middle;
  align-items: center;
}
.input-container>svg {
  width: 22px;
  height: 22px;
}
.input-container>input {
  border: none;
  flex: 1;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 15px;
  font-family: Rubik-regular, system-ui;
  margin-left: 10px;
}
input:focus {
  border: none;
  outline: none;
}
::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.primary-button {
  width: 100%;
  margin-top: 20px;
}
.image-container {
  width: 100%;
  text-align: center;
}
.image-container>svg {
  margin-top: 20px;
  cursor: pointer;
  width: 100px;
  height: 100px;
}
.icon-image {
  margin-top: 20px;
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 200px;
}
</style>