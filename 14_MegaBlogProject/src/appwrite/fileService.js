import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class FileService {
  client = new Client();
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("FileService :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketID, fileID);
      return true;
    } catch (error) {
      console.log("FileService :: deleteFile :: error", error);
      return false;
    }
  }

  async getFile(fileID) {
    try {
      return await this.bucket.getFile(conf.appwriteBucketID, fileID);
    } catch (error) {
      console.log("FileService :: getFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileID) {
    return this.bucket.getFilePreview(conf.appwriteBucketID, fileID);
  }

  async updateFile(fileID, file) {
    try {
      return await this.bucket.updateFile(conf.appwriteBucketID, fileID, file);
    } catch (error) {
      console.log("FileService :: updateFile :: error", error);
      return false;
    }
  }

  downLoadFile(fileID) {
    try {
      return this.bucket.getFileDownload(conf.appwriteBucketID, fileID);
    } catch (error) {
      console.log("FileService :: downLoadFile :: error", error);
      return false;
    }
  }
}

const fileService = new FileService();
export default fileService;
