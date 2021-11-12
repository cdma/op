tair_manager.cpp

int
tair_manager::put(int area, data_entry &key, data_entry &value, int expire_time, base_packet *request, int heart_vesion,
                  bool with_stat) {
                  rc = storage_mgr->put(bucket_number, mkey, value, version_care, expire_time);


rc = duplicator->duplicate_data(area, &key, &value, bucket_number,
                                                    slaves, request == NULL ? NULL : request->r);

  do_remote_sync(TAIR_REMOTE_SYNC_TYPE_PUT, &mkey, &value, rc, op_flag);
  }                                                  


dup_sync_manager.cpp

new_remote_sync_manager.cpp
NewRemoteSyncManager

remote_sync_manager.cpp
RemoteSyncManager
